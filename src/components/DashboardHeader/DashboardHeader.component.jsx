import React from 'react';
import './DashboardHeader.styles.css';

import UserWidget from '../UserWidget/UserWidget.component';

const DashboardHeader = (props) => {
  return (
    <div className="dashboard-header container-fluid">
      <a className="logo float-md-left" href="#">Friendly Budget</a>
      <UserWidget
        user={props.user}
        selectedBudget={props.selectedBudget}
      />
    </div>
  );
};

export default DashboardHeader;
