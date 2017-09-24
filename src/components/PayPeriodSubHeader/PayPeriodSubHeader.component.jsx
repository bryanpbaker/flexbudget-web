import React from 'react';
import { Badge } from 'reactstrap';

const PayPeriodSubHeader = (props) => {
  const { name, balance, startDate, endDate } = props.selectedPayPeriod;
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
        <div className="dates col"><h5>{startDate} - {endDate}</h5></div>
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
