import React from 'react';
import './reset.css';
import './App.css';
import './components/DisplayComponents/Display.css';
import './components/ButtonComponents/Button.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay total='0' />
      <ActionButton text='clear' buttonStyle='' />
      <NumberButton text='÷' buttonStyle='operator' />
      <NumberButton text='7' buttonStyle='number' />
      <NumberButton text='8' buttonStyle='number' />
      <NumberButton text='9' buttonStyle='number' />
      <NumberButton text='x' buttonStyle='operator' />
      <NumberButton text='4' buttonStyle='number' />
      <NumberButton text='5' buttonStyle='number' />
      <NumberButton text='6' buttonStyle='number' />
      <NumberButton text='–' buttonStyle='operator' />
      <NumberButton text='1' buttonStyle='number' />
      <NumberButton text='2' buttonStyle='number' />
      <NumberButton text='3' buttonStyle='number' />
      <NumberButton text='+' buttonStyle='operator' />
      <ActionButton text='0' buttonStyle='number' />
      <NumberButton text='=' buttonStyle='operator' />
    </div>
  );
};

export default App;
