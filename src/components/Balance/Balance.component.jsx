import React from 'react';
import { connect } from 'react-redux';

const Balance = (props) => {
  return (
    <div className="balance">
      {props.balance}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentBalance: state.currentBalance,
  };
}

export default connect(mapStateToProps, null)(Balance);
