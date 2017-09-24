import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import layout components
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader.component';
import PayPeriodSubHeader from '../../components/PayPeriodSubHeader/PayPeriodSubHeader.component';
import CreatePayPeriod from '../../components/CreatePayPeriod/CreatePayPeriod.component'
// import action creators
import { fetchPayPeriods, createPayPeriod, fetchSelectedPayPeriod } from '../../actions/PayPeriodActions';
import { getCurrentUser } from '../../actions/AuthActions';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      authUser: Object.keys(window.localStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0],
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.payPeriods) {
      this.props.fetchPayPeriods(nextProps.currentUser.uid);
      this.props.fetchSelectedPayPeriod(nextProps.currentUser.uid);
    }
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  }

  render() {
    if (this.state.authUser) {
      if (this.props.currentUser) {
        return (
          <div className="dashboard">
            <DashboardHeader
              user={this.props.currentUser}
              selectedPayPeriod={this.props.selectedPayPeriod}
              toggleModal={this.toggleModal}
            />
            <CreatePayPeriod
              user={this.props.currentUser}
              createPayPeriod={this.props.createPayPeriod}
              modalIsOpen={this.state.modalIsOpen}
              toggleModal={this.toggleModal}
            />
            { this.props.selectedPayPeriod &&
              <PayPeriodSubHeader
                selectedPayPeriod={this.props.selectedPayPeriod}
              />
            }
          </div>
        );
      }

      return (
        <div className="loading">Loading...</div>
      )
    }

    return <Redirect to="/" />;
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    payPeriods: state.payPeriods,
    selectedPayPeriod: state.selectedPayPeriod,
  };
}

export default
  connect(mapStateToProps, { getCurrentUser, fetchPayPeriods, createPayPeriod, fetchSelectedPayPeriod })(Dashboard);
