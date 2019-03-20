import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button className={"calc-numberBtn " + props.buttonStyle} onClick={props.action}>
      {props.text}
    </button>
  );
};

export default NumberButton;