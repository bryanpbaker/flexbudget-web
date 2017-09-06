import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import App from './App';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </div>
);

export default routes;
