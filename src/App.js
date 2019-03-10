import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
