import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div className="calc-numberBtn">
      {props.text}
    </div>
  );
};

export default NumberButton;