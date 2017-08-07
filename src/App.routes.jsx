import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage.container';
import App from './App';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default routes;
