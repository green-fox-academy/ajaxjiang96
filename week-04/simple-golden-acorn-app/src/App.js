import React from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acorns: 0,
    };

    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  handleDecrease() {
    const { acorns } = this.state;
    if (acorns > 0) {
      this.setState(
        { acorns: acorns - 1 },
      );
    }
  }

  handleIncrement() {
    const { acorns } = this.state;
    this.setState(
      { acorns: acorns + 1 },
    );
  }

  handleKeyUp(e) {
    switch (e.code) {
      case 'ArrowUp':
        this.handleIncrement();
        break;
      case 'ArrowDown':
        this.handleDecrease();
        break;
      default:
    }
  }


  render() {
    const { acorns } = this.state;
    return (
      <div className="App">
        <Button text="Buy one" action={this.handleIncrement} />
        <Display>{acorns}</Display>
        <Button text="Eat one" action={this.handleDecrease} />
      </div>
    );
  }
}

export default App;
