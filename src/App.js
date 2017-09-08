import React, { Component } from 'react';
import { connect } from 'react-redux';

// import components
import Dashboard from './pages/Dashboard/Dashboard.component';
import LandingPage from './pages/LandingPage/LandingPage.component';
import { getCurrentUser, signUserOut } from './actions/AuthActions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <Dashboard
            user={this.props.currentUser}
          />
        </div>
      );
    } else if (this.props.currentUser === false) {
      return (
        <div>
          <LandingPage />
        </div>
      )
    }

    return (
      <div className="loading">
        Loading...
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { getCurrentUser, signUserOut })(App);
