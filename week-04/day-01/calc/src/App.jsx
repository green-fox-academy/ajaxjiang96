import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      operator: '',
      invalid: false,
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case 'num1':
        if (!value || isNaN(value)) return this.handleError('The first and the last input field should be a number');
        break;
      case 'num2':
        if (!value || isNaN(value)) return this.handleError('The first and the last input field should be a number');
        break;
      case 'operator':
        if (!(/^[+|-|*|/]$/.test(value))) return this.handleError('Please choose a good operator: (+, -, /, *)');
        break;
      default:
        this.calculate();
    }
    this.setState({
      invalid: false,
      [name]: value,
    });
    return value;
  }

  calculate() {
    const { num1, operator, num2 } = this.state;
    const result = eval(`${num1}${operator}${num2}`);
    this.setState({
      result,
    });
  }

  handleError(message) {
    this.setState({
      message,
      invalid: true,
    });
  }

  render() {
    const {
      num1, num2, operator, invalid, message, result,
    } = this.state;
    return (
      <>
        <form className="calculator">
          <input type="text" name="num1" value={num1} onChange={this.handleChange} />
          <input type="text" name="operator" value={operator} onChange={this.handleChange} />
          <input type="text" name="num2" value={num2} onChange={this.handleChange} />
          <input type="button" name="calculate" value="Click Me!" onClick={this.handleChange} />
        </form>
        <p className="result-wrapper">
          Result:
          {' '}
          <span className="result">{invalid ? message : result}</span>
          <span className="result" />
        </p>
      </>
    );
  }
}

export default App;
