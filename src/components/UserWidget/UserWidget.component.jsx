import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './UserWidget.styles.css';

import SignOut from '../../containers/SignOut/SignOut.container';

class UserWidget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <span className="user-widget float-md-right">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown} size="sm">
          <DropdownToggle caret>
            {this.props.user.displayName}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem
              onClick={this.props.toggleModal}
            >
              Create New Budget
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Budgets</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <SignOut />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </span>
    );
  }
};

export default UserWidget;
