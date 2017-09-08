import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import Modal from 'react-modal';
import './CreateBudget.styles.css';

class CreateBudget extends Component {
  constructor(props) {
    super(props);

    this.state = {
      budgetName: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.createBudget = this.createBudget.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      budgetName: event.target.value,
    });
  }

  createBudget(event) {
    event.preventDefault();

    this.props.createBudget(this.props.user.uid, this.state.budgetName);
    setTimeout(() => {
      this.props.toggleModal();
      this.setState({ budgetName: '' });
    }, 300);
  }

  render() {
    return (
      <div className="create-budget">
        <Modal
          isOpen={this.props.modalIsOpen}
          contentLabel="Modal"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Form
                  onSubmit={this.createBudget}
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
                      value={this.state.budgetName}
                      placeholder="Enter a name for your budget"
                    />
                  </FormGroup>
                  <Button>Create Budget</Button>
                </Form>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
};

export default CreateBudget;
