import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Units from './components/App/Units';
import Started from './components/App/Started';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <ToastContainer />
          <Switch>
            <Route exact path="/" component={Units} />
            <Route exact path="/get-started" component={Started} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
