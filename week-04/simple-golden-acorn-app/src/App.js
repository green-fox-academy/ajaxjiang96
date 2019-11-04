import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acorns: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
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
        <button className="buy-button" type="button" onClick={this.handleIncrement.bind(this)}>Buy one</button>
        <p>{acorns}</p>
        <button className="eat-button" type="button" onClick={this.handleDecrease.bind(this)}>Eat one</button>
      </div>
    );
  }
}

export default App;
