import React, { Component } from 'react';
import { Badge, Button } from 'reactstrap';
import _ from 'lodash';
import './Budget.styles.css';

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      categories: _.values(nextProps.categories) || [],
    })
  }

  render() {
    // if there is a selectedBudget, render it
    if (this.props.selectedBudget) {
      // destructure selectedBudget properties
      const { name, key, balance } = this.props.selectedBudget.val();
      let keyGen = 1;

      const categoryList = this.state.categories.map((category) => {
        return <li key={keyGen++}>{category.name}</li>
      })

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
          <div className="row">
            <div className="col-12">
              <ul>
                {categoryList}
              </ul>
              <span className="add-category">
                <Button
                  onClick={this.props.addCategory}
                >
                  Add Category
                </Button>
              </span>
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
