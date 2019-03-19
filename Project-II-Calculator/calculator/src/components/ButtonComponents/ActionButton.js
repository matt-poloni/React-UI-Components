import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div className="calc-actionBtn">
      {props.text}
    </div>
  );
};

export default ActionButton;