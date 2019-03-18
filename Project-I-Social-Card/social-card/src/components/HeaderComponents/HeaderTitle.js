import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className="wrap-header-title">
      <span className="header-name">Lambda School </span>
      <span className="header-handle">@LambdaSchool </span>
      <span className="header-date">26 jan</span>
    </div>
  );
}

export default HeaderTitle;