import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Modal from 'react-modal';
import './CreatePayPeriod.styles.css';

class CreatePayPeriod extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payPeriodName: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createPayPeriod = this.createPayPeriod.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      payPeriodName: event.target.value,
    });
  }

  createPayPeriod(event) {
    event.preventDefault();

    this.props.createPayPeriod(this.props.user.uid, this.state.payPeriodName);
    setTimeout(() => {
      this.props.toggleModal();
      this.setState({ payPeriodName: '' });
    }, 300);
  }

  render() {
    return (
      <div className="create-pay-period">
        <Modal
          isOpen={this.props.modalIsOpen}
          contentLabel="Modal"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Form
                  onSubmit={this.createPayPeriod}
                >
                  <a
                    onClick={this.props.toggleModal}
                  >
                    Close
                  </a>
                  <FormGroup>
                    <Input
                      type="text"
                      onChange={this.handleInputChange}
                      value={this.state.payPeriodName}
                      placeholder="Enter a name for your pay period"
                    />
                  </FormGroup>
                  <Button>Create Pay Period</Button>
                </Form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default CreatePayPeriod;
