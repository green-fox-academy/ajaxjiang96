import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import Todo from './Todo';
import DefaultStyle from './theme-default.css';
import SupermanStyle from './Todo.superman.css';
import BatmanStyle from './Todo.batman.css';

const themes = {
  batman: BatmanStyle,
  superman: SupermanStyle,
  default: DefaultStyle,
}

console.log(themes)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, success, errorHandler) {
    e.preventDefault();
    const { value } = e.target.text;
    const { todos } = this.state;
    if (!value.length || value.length < 3) {
      return errorHandler('Error: At least 3 characters');
    }
    e.target.text.value = '';
    this.setState({
      todos: [{
        id: value.toLowerCase().split(' ').join('-'),
        text: value,
        done: false,
      }, ...todos],
    }, success);
    return true;
  }

  handleDelete(i) {
    const { todos } = this.state;
    todos.splice(i, 1);
    this.setState({ todos });
  }

  handleDone(i) {
    const { todos } = this.state;
    todos[i].done = !todos[i].done;
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <Todo
              todos={todos}
              handleDelete={(i) => this.handleDelete(i)}
              handleDone={(i) => this.handleDone(i)}
              handleSubmit={this.handleSubmit}
            />
          )}
        />
        <Route
          path="/themes"
          render={({ match }) => {
            const { themeName } = match.params;
            return <ThemeSwitcher themeName={themeName} />;
          }}
        />
        <Route
          path="/themed/:themeName?"
          render={({ match }) => {
            const { themeName } = match.params;
            return (
              <Todo
                todos={todos}
                handleDelete={(i) => this.handleDelete(i)}
                handleDone={(i) => this.handleDone(i)}
                handleSubmit={this.handleSubmit}
                themeName={themeName}
              />
            );
          }}
        />
      </Router>
    );
  }
}

export default App;
