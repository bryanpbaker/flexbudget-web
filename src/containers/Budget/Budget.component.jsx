import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Button, Form, FormGroup, Input } from 'reactstrap';
import _ from 'lodash';
import './Budget.styles.css';
import { createCategory } from '../../actions/BudgetActions';

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      newCategoryName: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      categories: _.values(nextProps.categories) || [],
    });
  }

  handleInputChange(event) {
    this.setState({
      newCategoryName: event.target.value,
    });
  }

  addCategory(event) {
    event.preventDefault();
    this.props.createCategory(this.props.user.uid, this.props.selectedBudget.key, this.state.newCategoryName);
    this.setState({
      newCategoryName: ''
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
                <Form
                  onSubmit={this.addCategory}
                >
                  <FormGroup>
                    <Input
                      type="text"
                      onChange={this.handleInputChange}
                      value={this.state.newCategoryName}
                      placeholder="Enter a category name"
                    />
                  </FormGroup>
                  <Button>Create Category</Button>
                </Form>
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

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapStateToProps, { createCategory })(Budget);
