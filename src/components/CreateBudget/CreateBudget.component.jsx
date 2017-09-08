import React from 'react';

const CreateBudget = (props) => {
  return (
    <div className="create-budget">
      <button
        onClick={props.createBudget}
      >
        Create Budget
      </button>
    </div>
  );
};

export default CreateBudget;
