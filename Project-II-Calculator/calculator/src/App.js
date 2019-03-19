import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
      <ActionButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <NumberButton />
      <ActionButton />
      <NumberButton />
    </div>
  );
};

export default App;
