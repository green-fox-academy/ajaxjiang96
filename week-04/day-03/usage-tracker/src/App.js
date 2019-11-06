import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import Component1 from './Component1';
import Component2 from './Component2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
    };
  }

  onUnmount(name, time) {
    const { logs } = this.state;
    logs.push({
      target: name,
      time,
    });
    this.setState(() => ({
      logs,
    }));
  }

  render() {
    const { logs } = this.state;
    return (
      <main>
        <Router>
          <nav>
            <NavLink to="/1" activeClassName="active">Component 1</NavLink>
            |
            <NavLink to="/2" activeClassName="active">Component 2</NavLink>
          </nav>

          <Switch>
            <Route path="/2" render={() => <Component2 onUnmount={(time) => this.onUnmount('Component2', time)} />} />
            <Route render={() => <Component1 onUnmount={(time) => this.onUnmount('Component1', time)} />} />
          </Switch>
        </Router>
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <tr>
                <td>{log.target}</td>
                <td>
                  {new Date(log.time).getSeconds()}
                  s
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default App;
