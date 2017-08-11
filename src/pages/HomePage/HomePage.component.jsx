import React, { Component } from 'react';
import NewUserForm from '../../containers/NewUserForm/NewUserForm.container';
import LoginForm from '../../containers/LoginForm/LoginForm.container';

const HomePage = () => {
  return (
    <div className="home-page">
      Home Page
      <NewUserForm />
      <LoginForm />
    </div>
  );
};

export default HomePage;
