import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardHeader.styles.css';

import UserWidget from '../UserWidget/UserWidget.component';

const DashboardHeader = (props) => {
  return (
    <div className="dashboard-header container-fluid">
      <Link to={'/'} className="logo float-md-left">Flexbudget</Link>
      <UserWidget
        user={props.user}
        selectedBudget={props.selectedBudget}
        toggleCreateModal={props.toggleCreateModal}
        toggleSelectModal={props.toggleSelectModal}
      />
    </div>
  );
};

export default DashboardHeader;
