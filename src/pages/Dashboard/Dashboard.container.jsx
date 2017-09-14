import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import layout components
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import CreateBudget from '../../components/CreateBudget/CreateBudget.component'
import Budget from '../../containers/Budget/Budget.container';
// import action creators
import { fetchBudgets, createBudget, fetchSelectedBudget } from '../../actions/BudgetActions.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
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

  render() {
    return (
      <div className="dashboard">
        <DashboardHeader
          user={this.props.user}
          selectedBudget={this.props.selectedBudget}
          toggleModal={this.toggleModal}
        />
        <Budget
          user={this.props.currentUser}
          selectedBudget={this.props.selectedBudget}
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

export default connect(mapStateToProps, { fetchBudgets, createBudget, fetchSelectedBudget })(Dashboard);
