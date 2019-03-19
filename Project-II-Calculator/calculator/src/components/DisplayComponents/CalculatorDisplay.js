import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  const displayVal = props.textDef;
  return (
    <div className="calc-display">
      {displayVal}
    </div>
  );
};

export default CalculatorDisplay;