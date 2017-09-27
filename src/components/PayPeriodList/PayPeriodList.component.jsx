import React, { Component } from 'react';
import Modal from 'react-modal';

const PayPeriodList = (props) => {
  return (
    <div className="pay-period-list">
      <Modal
        isOpen={props.selectModalIsOpen}
        contentLabel="Select a Pay Period"
      >
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
        </ul>
      </Modal>
    </div>
  );
};

export default PayPeriodList;
