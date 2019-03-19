import React from 'react';

const CalculatorDisplay = props => {
  return (
    <div className="calc-display">
      {props.total}
    </div>
  );
};

export default CalculatorDisplay;