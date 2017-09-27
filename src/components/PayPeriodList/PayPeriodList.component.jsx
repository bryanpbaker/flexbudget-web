import React, { Component } from 'react';
import _ from 'lodash';
import Modal from 'react-modal';

const PayPeriodList = (props) => {
  let key = 1;
  
  const payPeriodList = _.flatMap(props.payPeriods, (payPeriod) => {
    return <li key={key++}>{payPeriod.name}</li>;
  });

  return (
    <div className="pay-period-list">
      <Modal
        isOpen={props.selectModalIsOpen}
        onRequestClose={props.toggleSelectModal}
        contentLabel="Select a Pay Period"
      >
        <ul>
          {payPeriodList}
        </ul>
      </Modal>
    </div>
  );
};

export default PayPeriodList;
