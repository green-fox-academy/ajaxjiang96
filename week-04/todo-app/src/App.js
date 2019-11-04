import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './Item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          text: 'Feed the monkey',
          prio: 2,
        },
        {
          text: 'Buy milk',
          prio: 1,
        },
      ],
      doneTodo: [
        {
          text: 'Sleep 8 hours',
          prio: 2,
        },
        {
          text: 'Mentoring others',
          prio: 1,
        },
      ],
    };
    this.done = this.done.bind(this);
    this.delete = this.delete.bind(this);
  }

  done(item) {
    const { todo, doneTodo } = this.state;
    const finished = todo.splice(todo.indexOf(item), 1)[0];
    this.setState({
      todo,
      doneTodo: [...doneTodo, finished],
    });
  }

  delete(item) {
    const { doneTodo } = this.state;
    doneTodo.splice(doneTodo.indexOf(item), 1);
    this.setState({
      doneTodo,
    });
  }

  render() {
    const { todo, doneTodo } = this.state;
    return (
      <div className="App">
        <section>
          <h1>TODOS:</h1>
          <ul>
            {todo.sort((a, b) => a.prio - b.prio).map((item) => <ListItem content={item.text} action={() => this.done(item)} />)}
          </ul>
        </section>
        <section>
          <h1>DONE TODOS:</h1>
          <ul>
            {doneTodo.sort((a, b) => a.prio - b.prio).map((item) => <ListItem content={item.text} done action={() => this.delete(item)} />)}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
