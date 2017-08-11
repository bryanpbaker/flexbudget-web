import React, { Component } from 'react';
import { connect } from 'react-redux';
// import createUser method
import { authenticateUser } from '../../actions/AuthActions';

class LoginForm extends Component {
  constructor() {
    super();

    this.state = {
      newUserEmail: '',
      newUserPassword: '',
      currentUser: null
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      currentUser: nextProps.currentUser
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.authenticateUser(this.state.newUserEmail, this.state.newUserPassword);
  }

  render() {
    if (this.state.currentUser) {
      return (
        <div>
          {this.state.currentUser.email}
        </div>  
      )
    }

    return (
      <div className="new-user-form">
        <form onSubmit={this.handleFormSubmit}>
          <input
            name="newUserEmail"
            type="email"
            placeholder="Email"
            onChange={this.handleInputChange}
            value={this.state.newUserEmail}
          />
          <input
            name="newUserPassword"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
            value={this.state.newUserPassword}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { authenticateUser })(LoginForm);
