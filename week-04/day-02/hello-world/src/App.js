import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <p>Hello World!</p>} />
        <Route
          path="/error/:errorcode"
          render={({ match }) => (
            <p>
              Error:
              {' '}
              {match.params.errorcode}
            </p>
          )}
        />
        <Route
          path="/error"
          render={() => (
            <p>
              Something bad happened.
            </p>
          )}
        />
        <Route render={() => <p>This page is not implemented yet</p>} />
      </Switch>
    </Router>
  );
}

export default App;
