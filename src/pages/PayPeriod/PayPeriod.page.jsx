import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import layout components
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import CreatePayPeriod from '../../components/CreatePayPeriod/CreatePayPeriod.component'
import Budget from '../../containers/Budget/Budget.container';
// import action creators
import { fetchPayPeriods, createPayPeriod, fetchSelectedPayPeriod } from '../../actions/PayPeriodActions.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchPayPeriods(this.props.currentUser.uid);
    this.props.fetchSelectedPayPeriod(this.props.currentUser.uid);
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
          selectedPayPeriod={this.props.selectedPayPeriod}
          toggleModal={this.toggleModal}
        />
        <CreatePayPeriod
          user={this.props.currentUser}
          createPayPeriod={this.props.createPayPeriod}
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

export default connect(mapStateToProps, { fetchPayPeriods, createPayPeriod, fetchSelectedPayPeriod })(Dashboard);
