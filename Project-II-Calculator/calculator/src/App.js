import React from 'react';
import './reset.css';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay textDef='0' />
      <ActionButton text='clear' />
      <NumberButton text='÷' />
      <NumberButton text='7' />
      <NumberButton text='8' />
      <NumberButton text='9' />
      <NumberButton text='x' />
      <NumberButton text='4' />
      <NumberButton text='5' />
      <NumberButton text='6' />
      <NumberButton text='-' />
      <NumberButton text='1' />
      <NumberButton text='2' />
      <NumberButton text='3' />
      <NumberButton text='+' />
      <ActionButton text='0' />
      <NumberButton text='=' />
    </div>
  );
};

export default App;
