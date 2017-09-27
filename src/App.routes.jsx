import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.page';
import Dashboard from './pages/Dashboard/Dashboard.page';

const routes = (
  <div>
    <Route exact path="/" component={LandingPage} />
    <Route path="/dashboard" component={Dashboard} />
  </div>
);

export default routes;
