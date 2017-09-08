import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { signUserOut } from '../../actions/AuthActions';

const SignOut = (props) => {
  return (
    <div className="sign-out">
      <Button
        color="primary"
        onClick={props.signUserOut}
      >
        Sign Out
      </Button>
    </div>
  );
};

export default connect(null, { signUserOut })(SignOut);
