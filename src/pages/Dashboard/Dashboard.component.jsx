import React, { Component } from 'react';
import { connect } from 'react-redux';
// import layout components
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import CreateBudget from '../../components/CreateBudget/CreateBudget.component'
import SignOut from '../../containers/SignOut/SignOut.container';
import Budget from '../../containers/Budget/Budget.container';
import { fetchBudgets, createBudget, fetchSelectedBudget } from '../../actions/UserDataActions.jsx';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchBudgets(this.props.currentUser.uid);
    this.props.fetchSelectedBudget(this.props.currentUser.uid);
  }

  componentWillReceiveProps(nextProps) {
    console.log('budgets', nextProps.budgets);
  }

  render() {
    return (
      <div className="dashboard">
        <DashboardHeader
          user={this.props.user}
        />
        <CreateBudget
          createBudget={() => this.props.createBudget(this.props.currentUser.uid)}
        />
        <SignOut />
        <Budget />
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
