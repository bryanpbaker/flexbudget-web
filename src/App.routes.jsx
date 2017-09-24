import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage.page';
import Dashboard from './pages/Dashboard/Dashboard.page';
import App from './App';
import Budget from './components/Budget/Budget.component';

const routes = (
  <div>
    <Route exact path="/" component={LandingPage} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/dashboard/budget" component={Budget} />
  </div>
);

export default routes;
