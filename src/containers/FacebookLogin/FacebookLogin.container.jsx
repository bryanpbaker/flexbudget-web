import React, { Component } from 'react';
import { connect } from 'react-redux';
import { facebookAuthenticateUser } from '../../actions/AuthActions';

class FacebookLogin extends Component {
  constructor(props) {
    super(props);

    this.loginWithFacebook = this.loginWithFacebook.bind(this);
  }

  loginWithFacebook() {
    this.props.facebookAuthenticateUser()
  }

  render() {
    return (
      <div>
        <button
          onClick={this.loginWithFacebook}
        >
          Login with Facebook
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { facebookAuthenticateUser })(FacebookLogin);
