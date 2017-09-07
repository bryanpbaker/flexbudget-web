import React from 'react';
import { connect } from 'react-redux';
import { signUserOut } from '../../actions/AuthActions';

const SignOut = (props) => {
  return (
    <div className="sign-out">
      <button onClick={props.signUserOut}>Sign Out</button>
    </div>
  );
};

export default connect(null, { signUserOut })(SignOut);
