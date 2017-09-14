import React from 'react';
import Modal from 'react-modal';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const CreateCategory = (props) => {
  return (
    <div className="create-category">
      <Modal
        isOpen={props.categoryModalIsOpen}
        contentLabel="New Category"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <Button onClick={props.toggleModal}>X</Button>
              <Form
                onSubmit={props.addCategory}
              >
                <FormGroup>
                  <Input
                    type="text"
                    onChange={props.handleInputChange}
                    value={props.newCategoryName}
                    placeholder="Enter a category name"
                  />
                </FormGroup>
                <Button>Create Category</Button>
              </Form>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreateCategory;
