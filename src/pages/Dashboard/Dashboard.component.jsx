import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    console.log('nextProps', nextProps.selectedBudget);
  }

  render() {
    return (
      <div className="dashboard">
        Dashboard
        <p>
          {this.props.user.displayName}
        </p>
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
