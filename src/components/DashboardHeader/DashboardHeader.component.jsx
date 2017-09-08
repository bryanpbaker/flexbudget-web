import React from 'react';
import Styles from './DashboardHeader.styles.css';

const DashboardHeader = (props) => {
  return (
    <div className="dashboard-header">
      <div className="logo">
        <a href="#">Friendly Budget</a>
      </div>
      <div className="">
        <span className="user">
          Hi {props.user.displayName}!
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
