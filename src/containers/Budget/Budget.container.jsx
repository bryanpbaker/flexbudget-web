import React, { Component } from 'react';
import { connect } from 'react-redux';

class Budget extends Component {
  render() {
    return (
      <div>Budget</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedBudget: state.selectedBudget,
  };
}

export default connect(mapStateToProps, null)(Budget);
