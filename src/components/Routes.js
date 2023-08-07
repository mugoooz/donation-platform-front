import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Home from './Home';
// Import other components as needed

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home" component={Home} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default Routes;
