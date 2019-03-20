import React from 'react';

const CalculatorDisplay = props => {
  return (
    <div className="calc-display">
      {props.total || 0}
    </div>
  );
};

export default CalculatorDisplay;