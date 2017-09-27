import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap'
import Modal from 'react-modal';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
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
      startDate: null,
      endDate: null,
      focusedInput: null,
    });
  }

  createPayPeriod(event) {
    event.preventDefault();
    const { payPeriodName, startDate, endDate } = this.state;

    this.props.createPayPeriod(this.props.user.uid, payPeriodName, startDate, endDate);
    setTimeout(() => {
      this.props.toggleModal();
      this.setState({ payPeriodName: '' });
    }, 300);
  }

  render() {
    return (
      <div className="create-pay-period">
        <Modal
          isOpen={this.props.createModalIsOpen}
          onRequestClose={this.props.toggleCreateModal}
          contentLabel="Modal"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Form
                  onSubmit={this.createPayPeriod}
                >
                  <a
                    onClick={this.props.toggleCreateModal}
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
                  <FormGroup>
                    <DateRangePicker
                      startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                      endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                      onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                      focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                      onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
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
