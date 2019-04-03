from flask import (Flask,
                   render_template,
                   request,
                   redirect,
                   jsonify,
                   url_for,
                   flash,
                   make_response)

from functools import wraps

# Session works as a dictionary storing
# information for the longevity of a user's session with the server
from flask import session as login_session

# Database information
from sqlalchemy import create_engine, desc
from sqlalchemy.orm import sessionmaker
from models import Base, User, Sport, SportItem

import random
import string

from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
import httplib2
import json
import requests

app = Flask(__name__)

# Connect to Database and create database session
engine = create_engine('sqlite:///houses.db')
Base.metadata.bind = engine

CLIENT_ID = json.loads(open('client_secrets.json',
                            'r').read())['web']['client_id']
APPLICATION_NAME = 'Sport Catalog App'

DBSession = sessionmaker(bind=engine)
session = DBSession()


# Route to the home page
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login')
def login():
    state = ''.join(random.choice(
        string.ascii_uppercase + string.digits)
        for x in xrange(32))
    login_session['state'] = state
    return render_template(
        'login.html', STATE=login_session['state'])


# login_required decorator
def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'username' not in login_session:
            return redirect('/login')
        return f(*args, **kwargs)
    return decorated_function


# Creating a new User
def create_user(login_session):
    newUser = User(
        name=login_session['username'],
        email=login_session['email'],
        image=login_session['picture'])
    session.add(newUser)
    session.commit()
    user = session.query(User).filter_by(
        email=login_session['email']).one()
    return user.id


# Getting User info
def getUserInfo(user_id):
    user = session.query(User)\
        .filter_by(id=user_id).one()
    return user


# Getting User info
def getUserID(email):
    try:
        user = session.query(User)\
            .filter_by(email=email).one()
        return user.id
    except:
        return None

# Adding google plus login
@app.route('/gconnect', methods=['POST'])
def gconnect():
    # Validate state token
    if request.args.get('state') != login_session['state']:
        response = make_response(
            json.dumps('Invalid state parameter.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response
    # Obtain authorization code
    code = request.data

    try:
        # Upgrade the authorization code into a credentials object
        oauth_flow = flow_from_clientsecrets('client_secrets.json', scope='')
        oauth_flow.redirect_uri = 'postmessage'
        credentials = oauth_flow.step2_exchange(code)
    except FlowExchangeError:
        response = make_response(
            json.dumps('Failed to upgrade the authorization code.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Check that the access token is valid.
    access_token = credentials.access_token
    url = \
        ('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=%s'
         % access_token)
    h = httplib2.Http()
    result = json.loads(h.request(url, 'GET')[1])
    # If there was an error in the access token info, abort.
    if result.get('error') is not None:
        response = make_response(
            json.dumps(result.get('error')), 500)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Verify that the access token is used for the intended user.
    gplus_id = credentials.id_token['sub']
    if result['user_id'] != gplus_id:
        response = make_response(
            json.dumps("Token's user ID doesn't match given user ID."), 401)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Verify that the access token is valid for this app.
    if result['issued_to'] != CLIENT_ID:
        response = make_response(
            json.dumps("Token's client ID does not match app's."), 401)
        print "Token's client ID does not match app's."
        response.headers['Content-Type'] = 'application/json'
        return response

    stored_access_token = login_session.get('access_token')
    stored_gplus_id = login_session.get('gplus_id')
    if stored_access_token is not None and gplus_id == stored_gplus_id:
        response = make_response(
            json.dumps('Current user is already connected.'), 200)
        response.headers['Content-Type'] = 'application/json'
        return response

    # Store the access token in the session for later use.
    login_session['access_token'] = credentials.access_token
    login_session['gplus_id'] = gplus_id

    # Get user info
    userinfo_url = "https://www.googleapis.com/oauth2/v1/userinfo"
    params = {'access_token': credentials.access_token, 'alt': 'json'}
    answer = requests.get(userinfo_url, params=params)

    data = answer.json()

    login_session['username'] = data['name']
    login_session['picture'] = data['picture']
    login_session['email'] = data['email']

    user_id = getUserID(login_session['email'])
    if not user_id:
        user_id = create_user(login_session)
    login_session['user_id'] = user_id
    print 'going fine'

    output = ''
    output += '<h1>Welcome, '
    output += login_session['username']
    output += '!</h1>'
    output += '<img src="'
    output += login_session['picture']
    output += ' " style = "width: 300px; height: 300px;border-radius: ' \
              '150px;-webkit-border-radius: 150px;-moz-border-radius: 150px;"> '
    flash("You are now logged in as %s" % login_session['username'])
    print "done!"
    return output


# Disconnecting a google User
@app.route('/gdisconnect')
def gdisconnect():
    # Only disconnect a connected user.
    access_token = login_session.get('access_token')
    if access_token is None:
        response = make_response(
            json.dumps('Current user not connected.'), 401)
        response.headers['Content-Type'] = 'application/json'
        return response
    url = \
        'https://accounts.google.com/o/oauth2/revoke?token=%s' \
        % access_token
    h = httplib2.Http()
    result = h.request(url, 'GET')[0]

    if result['status'] == '200':
        # Reset the user's session.
        del login_session['access_token']
        del login_session['gplus_id']
        del login_session['username']
        del login_session['email']
        del login_session['picture']

        response = make_response(
            json.dumps('Successfully disconnected.'), 200)
        response.headers['Content-Type'] = 'application/json'
        return response
    else:
        # For whatever reason, the given token was invalid.
        response = make_response(
            json.dumps('Failed to revoke token for given user.', 400))
        response.headers['Content-Type'] = 'application/json'
        return response


# Disconnect based on provider
@app.route('/disconnect')
def disconnect():
    categories = session.query(Sport).all()
    if 'provider' in login_session:
        if login_session['provider'] == 'google':
            gdisconnect()
            del login_session['gplus_id']
            del login_session['credentials']
        if login_session['provider'] == 'facebook':
            fbdisconnect()
            del login_session['facebook_id']
        del login_session['username']
        del login_session['email']
        del login_session['picture']
        del login_session['user_id']
        del login_session['provider']
        flash("You have successfully been logged out.")
        return redirect(
            url_for('sport_category', categories=categories))
    else:
        flash("You have not been logged in")
        return redirect(
            url_for('sport_category', categories=categories))


# Route for the category page
@app.route('/')
def houses_category():
    categories = session.query(House).all()
    items = session.query(HouseItems).\
        order_by(desc(HouseItems.id)).limit(6)
    if 'user_id' not in login_session:
        return render_template(
            'home.html', categories=categories, items=items)
    else:
        return render_template(
            'homepage.html', categories=categories, items=items)


# Route for creating a new Category
@app.route('/get-started', methods=['GET', 'POST'])
@login_required
def new_category():
    if request.method == 'POST':
        newCategory = Houses(
            name=request.form['name'], user_id=login_session['user_id'])
        session.add(newHouses)
        session.commit()
        flash('New house %s successfully created' % newCategory.name)
        return redirect(url_for('/'))
    else:
        return render_template('new.html')


# Route for editing Category
@app.route('/edit/<int:category_id>', methods=['GET', 'POST'])
@login_required
def edit_houses(house_id):
    editedCategory = session.query(Houses).filter_by(id=house_id).one()
    if editHouses.user_id != login_session['user_id']:
        return "<script> function myFunction() {" \
               "alert('You are not authorized to edit this item. " \
               "Please create your own item before you proceed.');" \
               "}" \
               "</script>" \
               "<body onload='myFunction()'>"
    if request.method == 'POST':
        if request.form['name']:
            editedHouses.name = request.form['name']
            flash(' %s has successfully been edited' % editHouse.name)
            return redirect(url_for('edit_house'))
    else:
        return render_template('edit.html', house=editedHouse)


# Route for deleting Category
@app.route('/delete/<int:category_id>', methods=['GET', 'POST'])
@login_required
def delete_houses(house_id):
    deleteHouse = session.query(House).filter_by(id=house._id).one()
    if deleteHouse.user_id != login_session['user_id']:
        return "<script> function myFunction() {" \
               "alert('You are not authorized to delete this item. " \
               "Please create your own item before you proceed.');" \
               "}" \
               "</script>" \
               "<body onload='myFunction()'>"
    if request.method == "POST":
        session.delete(deleteHouse)
        session.commit()
        flash('%s successfully deleted' % deleteHouse.name)
        return redirect(url_for('delete_house'))
    else:
        return render_template('deleteHouse.html', category=deleteCategory)

# This is for JSON API endpoint for list of sport categories
@app.route('/cici-homes/houses/JSON')
def housesJSON():
    houses = session.query(Houses).all()
    return jsonify(Houses_categories=[category.serialize for category in categories])


# This is for JSON API endpoint for listing houses
@app.route('/cici-homes/<int:id>/items/JSON')
def itemsJSON(house_id):
    items = session.query(HoueItem).filter_by(house_id=house_id)
    return jsonify(Item_house=[item.serialize for item in items])


if __name__ == '__main__':
    app.secret_key = 'super_secret_key'
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
