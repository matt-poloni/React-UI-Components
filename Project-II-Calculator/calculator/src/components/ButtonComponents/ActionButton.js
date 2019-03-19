import React from 'react';

const ActionButton = props => {
  return (
    <button className={"calc-actionBtn " + props.buttonStyle}>
      {props.text}
    </button>
  );
};

export default ActionButton;