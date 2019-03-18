import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <p className="wrap-header-title">
      <span className="header-name">Lambda School</span> <span className="header-handle">@LambdaSchool</span> • <span className="header-date">26 jan</span>
    </p>
  );
}

export default HeaderTitle;