import React, { Component } from 'react';
import { connect } from 'react-redux';
// import createUser method
import { createUser } from '../../actions/AuthActions';

class NewUserForm extends Component {
  constructor() {
    super();

    this.state = {
      newUserEmail: '',
      newUserPassword: '',
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();

    this.props.createUser(this.state.newUserEmail, this.state.newUserPassword);
  }

  render() {
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
};

export default connect(null, { createUser })(NewUserForm);
