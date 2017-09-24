import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink, Badge } from 'reactstrap';

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
      <div className="row align-items-center">
        <div className="col" style={{ marginTop: '25px' }}>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to={'/dashboard/budget'} className="nav-link active">Budget</Link>
            </li>
            <li className="nav-item">
              <Link to={'/dashboard/transactions'} className="nav-link">Transactions</Link>
            </li>
            <li className="nav-item">
              <Link to={'/dashboard/reports'} className="nav-link">Reports</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PayPeriodSubHeader;
