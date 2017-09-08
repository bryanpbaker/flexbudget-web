import React, { Component } from 'react';
import { connect } from 'react-redux';

class Budget extends Component {
  render() {
    if (this.props.selectedBudget) {
      return (
        <div>
          <div>Budget</div>
          <div>Budget ID: {this.props.selectedBudget}</div>
        </div>
      );
    }

    return (
      <div className="loading">
        loading...
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedBudget: state.selectedBudget,
  };
}

export default connect(mapStateToProps, null)(Budget);
