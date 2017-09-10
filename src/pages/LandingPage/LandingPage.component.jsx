import React from 'react';
import FacebookLogin from '../../containers/FacebookLogin/FacebookLogin.container';
// import NewUserForm from '../../containers/NewUserForm/NewUserForm.container';
// import LoginForm from '../../containers/LoginForm/LoginForm.container';

const LandingPage = () => {
  return (
    <div className="home-page">
      Landing Page
      <FacebookLogin />
    </div>
  );
};

export default LandingPage;
