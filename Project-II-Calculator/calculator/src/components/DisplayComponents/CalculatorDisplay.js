import React from 'react';

const CalculatorDisplay = props => {
  const displayVal = props.textDef;
  return (
    <div className="calc-display">
      {displayVal}
    </div>
  );
};

export default CalculatorDisplay;