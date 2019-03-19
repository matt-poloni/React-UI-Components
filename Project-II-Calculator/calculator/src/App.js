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
        <ActionButton text='clear' buttonStyle='' action={this.handleClear.bind(this)} />
        <NumberButton text='÷' buttonStyle='operator' action={this.handleDivide.bind(this)} />
        <NumberButton text='7' buttonStyle='number' action={this.handleSeven.bind(this)} />
        <NumberButton text='8' buttonStyle='number' action={this.handleEight.bind(this)} />
        <NumberButton text='9' buttonStyle='number' action={this.handleNine.bind(this)} />
        <NumberButton text='x' buttonStyle='operator' action={this.handleMultiply.bind(this)} />
        <NumberButton text='4' buttonStyle='number' action={this.handleFour.bind(this)} />
        <NumberButton text='5' buttonStyle='number' action={this.handleFive.bind(this)} />
        <NumberButton text='6' buttonStyle='number' action={this.handleSix.bind(this)} />
        <NumberButton text='–' buttonStyle='operator' action={this.handleSubtract.bind(this)} />
        <NumberButton text='1' buttonStyle='number' action={this.handleOne.bind(this)} />
        <NumberButton text='2' buttonStyle='number' action={this.handleTwo.bind(this)} />
        <NumberButton text='3' buttonStyle='number' action={this.handleThree.bind(this)} />
        <NumberButton text='+' buttonStyle='operator' action={this.handleAdd.bind(this)} />
        <ActionButton text='0' buttonStyle='number' action={this.handleZero.bind(this)} />
        <NumberButton text='=' buttonStyle='operator' action={this.handleEquals.bind(this)} />
      </div>
    );
  }
}

export default App;
