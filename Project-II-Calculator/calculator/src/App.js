import React from 'react';
import './reset.css';
import './App.css';
import './components/DisplayComponents/Display.css';
import './components/ButtonComponents/Button.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';
import ActionButton from './components/ButtonComponents/ActionButton.js';
import NumberButton from './components/ButtonComponents/NumberButton.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
    };
  }

  // Clear Handler
  handleClear() { this.setState({ total: '' }) }

  // Number Handlers
  handleOne() { this.setState({ total: this.state.total + '1' }) }
  handleTwo() { this.setState({ total: this.state.total + '2' }) }
  handleThree() { this.setState({ total: this.state.total + '3' }) }
  handleFour() { this.setState({ total: this.state.total + '4' }) }
  handleFive() { this.setState({ total: this.state.total + '5' }) }
  handleSix() { this.setState({ total: this.state.total + '6' }) }
  handleSeven() { this.setState({ total: this.state.total + '7' }) }
  handleEight() { this.setState({ total: this.state.total + '8' }) }
  handleNine() { this.setState({ total: this.state.total + '9' }) }
  handleZero() { this.setState({ total: this.state.total + '0' }) }

  // Operator Handlers
  handleDivide() { this.setState({ total: this.state.total + '/' }) }
  handleMultiply() { this.setState({ total: this.state.total + '*' }) }
  handleSubtract() { this.setState({ total: this.state.total + '-' }) }
  handleAdd() { this.setState({ total: this.state.total + '+' }) }

  // Equals Handler
  handleEquals() { this.setState({ total: eval(this.state.total) }) }

  render() {
    return (
      <div className="calculator">
        <CalculatorDisplay total={this.state.total} />
        <ActionButton text='clear' buttonStyle='' on/>
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
  }
}

export default App;
