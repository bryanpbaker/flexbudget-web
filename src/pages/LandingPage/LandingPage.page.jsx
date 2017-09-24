import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import FacebookLogin from '../../containers/FacebookLogin/FacebookLogin.container';
// import NewUserForm from '../../containers/NewUserForm/NewUserForm.container';
// import LoginForm from '../../containers/LoginForm/LoginForm.container';
import { checkAuthState } from '../../actions/AuthActions';

class LandingPage extends Component {
  componentWillMount() {
    this.props.checkAuthState();
  }

  render() {
    if (!this.props.authState) {
      return (
        <div className="home-page">
          Landing Page
          <FacebookLogin />
        </div>
      );
    }

    return <Redirect to="/dashboard" />
  }
};

function mapStateToProps(state) {
  return {
    authState: state.authState,
  }
}

export default connect(mapStateToProps, { checkAuthState })(LandingPage);
