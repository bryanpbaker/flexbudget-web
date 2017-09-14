import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// import bootstrap components
import { Badge, Button } from 'reactstrap';
// import styles
import './Budget.styles.css';
// import action creators
import { createCategory } from '../../actions/BudgetActions';
// import components
import CreateCategory from '../../components/CreateCategory/CreateCategory.component';

class Budget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      newCategoryName: '',
      categoryModalIsOpen: false,
    };

    // bind `this`
    this.toggleCategoryModal = this.toggleCategoryModal.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.handleCategoryInputChange = this.handleCategoryInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // set categories to an array version of props.categories
    this.setState({
      categories: _.values(nextProps.categories) || [],
    });
  }

  toggleCategoryModal() {
    this.setState({
      categoryModalIsOpen: !this.state.categoryModalIsOpen,
    });
  }

  handleCategoryInputChange(event) {
    this.setState({
      newCategoryName: event.target.value,
    });
  }

  addCategory(event) {
    // prevent form submit
    event.preventDefault();
    // call `createCategory` action creator
    this.props.createCategory(this.props.user.uid, this.props.selectedBudget.key, this.state.newCategoryName);
    // reset newCategoryName state
    this.setState({
      newCategoryName: '',
      categoryModalIsOpen: false,
    })
  }

  render() {
    const date = new Date();
    const months = [];
    months[0] = 'January';
    months[1] = 'February';
    months[2] = 'March';
    months[3] = 'April';
    months[4] = 'May';
    months[5] = 'June';
    months[6] = 'July';
    months[7] = 'August';
    months[8] = 'September';
    months[9] = 'October';
    months[10] = 'November';
    months[11] = 'December';

    // if there is a selectedBudget, render it
    if (this.props.selectedBudget) {
      // destructure selectedBudget properties
      const { name, key, balance } = this.props.selectedBudget.val();
      let keyGen = 1;

      const categoryList = this.state.categories.map((category) => {
        return <li key={keyGen++}>{category.name}: <input type="number" value={category.budgeted} /></li>
      })

      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 budget-period">{months[date.getMonth()]} {date.getYear() + 1900}</div>
          </div>
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
              <Button
                onClick={this.toggleCategoryModal}
              >
                Add Category
              </Button>
              <CreateCategory
                categoryModalIsOpen={this.state.categoryModalIsOpen}
                toggleModal={this.toggleCategoryModal}
                handleInputChange={this.handleCategoryInputChange}
                addCategory={this.addCategory}
              />
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
