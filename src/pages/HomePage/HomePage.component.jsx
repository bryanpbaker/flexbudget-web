import React from 'react';
import NewUserForm from '../../containers/NewUserForm/NewUserForm.container';
import LoginForm from '../../containers/LoginForm/LoginForm.container';
import FacebookLogin from '../../containers/FacebookLogin/FacebookLogin.container';

const HomePage = () => {
  return (
    <div className="home-page">
      Home Page
      <FacebookLogin />
    </div>
  );
};

export default HomePage;
