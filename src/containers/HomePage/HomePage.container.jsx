import React, { Component } from 'react';
import fb from '../../config/firebase.config';

export default class HomePage extends Component {
  constructor() {
    super();

    this.auth = fb.auth();
    this.createUser = this.createUser.bind(this);
  }

  createUser() {
    this.auth.createUserWithEmailAndPassword('bryanpbaker@gmail.com', 'Harley85')
      .then(user => console.log(user))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div className="home-page">
        Home Page
        <button onClick={this.createUser}>Click!</button>
      </div>
    );
  }
}
