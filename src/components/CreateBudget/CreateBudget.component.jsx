import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

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
  }

  render() {
    return (
      <div className="create-budget">
        <div className="container">
          <div className="row">
            <div className="form-container col-md-6">
              <Form
                onSubmit={this.createBudget}
              >
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
      </div>
    );
  }
};

export default CreateBudget;
