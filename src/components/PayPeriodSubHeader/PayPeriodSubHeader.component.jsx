import React from 'react';
import { Badge } from 'reactstrap';

const PayPeriodSubHeader = (props) => {
  const { name, balance } = props.selectedPayPeriod;
  let balanceState = null;

  if (balance > 0) {
    balanceState = 'success'
  } else if (balance < 0) {
    balanceState = 'danger'
  }

  return (
    <div className="pay-period-sub-header container-fluid">
      <div className="row align-items-center">
        <div className="info col">
          <h2>{name}</h2>
        </div>
        <div className="dates col"><h5>September 30th - October 14th</h5></div>
        <div className="tabs col"></div>
        <div className="balance col">
          <h2 className="text-right">
            <Badge
              color={balanceState || 'default'}
            >
              {balance}
            </Badge>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PayPeriodSubHeader;
