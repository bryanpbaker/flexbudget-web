import React, { Component } from 'react';
import { Badge } from 'reactstrap';
import './Budget.styles.css';

class Budget extends Component {
  render() {
    // if there is a selectedBudget, render it
    if (this.props.selectedBudget) {
      // destructure selectedBudget properties
      const { name, key, balance } = this.props.selectedBudget;

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 name">
              <h1 className="float-xs-left">{name}</h1>
            </div>
            <div className="col-xs-12 col-md-6 balance">
              <Badge color="success float-md-right">{balance}</Badge>
            </div>
          </div>
        </div>
      );
    }

    // otherwise, show a loader
    return (
      <div className="loading">
        loading...
      </div>
    )
  }
}

export default Budget;
