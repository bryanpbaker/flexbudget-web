import React from 'react';
import { connect } from 'react-redux';

import { signUserOut } from '../../actions/AuthActions';

const SignOut = (props) => {
  return (
    <div className="sign-out">
      <a
        onClick={props.signUserOut}
      >
        Sign Out
      </a>
    </div>
  );
};

export default connect(null, { signUserOut })(SignOut);
