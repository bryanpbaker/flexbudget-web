import React, { Component } from 'react';
import { connect } from 'react-redux';
// import layout components
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import CreateBudget from '../../components/CreateBudget/CreateBudget.component'
import Budget from '../../components/Budget/Budget.component';
// import action creators
import { fetchBudgets, createBudget, fetchSelectedBudget } from '../../actions/UserDataActions.jsx';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchBudgets(this.props.currentUser.uid);
    this.props.fetchSelectedBudget(this.props.currentUser.uid);
  }

  render() {
    return (
      <div className="dashboard">
        <DashboardHeader
          user={this.props.user}
          selectedBudget={this.props.selectedBudget}
        />
        <Budget
          selectedBudget={this.props.selectedBudget}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    budgets: state.budgets,
    selectedBudget: state.selectedBudget
  };
}

export default connect(mapStateToProps, { fetchBudgets, createBudget, fetchSelectedBudget })(Dashboard);
