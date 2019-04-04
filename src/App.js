import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Units from './components/App/Units';
import Started from './components/App/Started';
import HomeDescription from './components/App/HomeDescription';
import NewHome from './components/App/NewHome';
import EditHome from './components/App/EditHome';
import SignUp from './components/App/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Units} />
            <Route exact path="/get-started" component={Started} />
            <Route exact path="/details/:id" component={HomeDescription} />
            <Route exact path="/edit/:id" component={EditHome} />
            <Route exact path="/new" component={NewHome} />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
