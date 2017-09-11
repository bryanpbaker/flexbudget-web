import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import layout components
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import CreateBudget from '../../components/CreateBudget/CreateBudget.component'
import Budget from '../../components/Budget/Budget.component';
// import action creators
import { fetchBudgets, createBudget, fetchSelectedBudget, fetchCategories, createCategory } from '../../actions/BudgetActions.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  componentDidMount() {
    this.props.fetchBudgets(this.props.currentUser.uid);
    this.props.fetchSelectedBudget(this.props.currentUser.uid);
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  addCategory() {
    this.props.createCategory(this.props.currentUser.uid, this.props.selectedBudget.key);
  }

  render() {
    return (
      <div className="dashboard">
        <DashboardHeader
          user={this.props.user}
          selectedBudget={this.props.selectedBudget}
          toggleModal={this.toggleModal}
        />
        <Budget
          selectedBudget={this.props.selectedBudget}
          addCategory={this.addCategory}
          categories={this.props.categories}
        />
        <CreateBudget
          user={this.props.currentUser}
          createBudget={this.props.createBudget}
          modalIsOpen={this.state.modalIsOpen}
          toggleModal={this.toggleModal}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    budgets: state.budgets,
    selectedBudget: state.selectedBudget,
    categories: state.categories
  };
}

export default connect(mapStateToProps, { fetchBudgets, createBudget, fetchSelectedBudget, createCategory })(Dashboard);
