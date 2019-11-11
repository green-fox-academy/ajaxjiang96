/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import marked from 'marked';

import './App.css';
import Nav from './components/Nav';
import Editor from './components/Editor';

function App() {
  const [docs, setDocs] = useState([]);
  const [currentDoc, setCurrentDoc] = useState('');
  const [currentDocTitle, setCurrentDocTitle] = useState('');

  const init = () => {
    setDocs([
      { title: 'hello', id: 'doc1' },
      { title: '3q', id: 'doc2' },
      { title: '3q very much', id: 'doc3' },
    ]);
  };

  const addNew = () => {
    setDocs([...docs, {
      title: '',
      id: 'sdf',
    }]);
  };

  useEffect(init, []);

  return (
    <div className="container">
      <Router>
        <Nav docs={docs} addNew={addNew} />
        <Switch>
          <Route>
            <div className="editor"><Editor content={currentDoc} onUpdate={setCurrentDoc} setTitle={setCurrentDocTitle} /></div>
            <main>
              <article dangerouslySetInnerHTML={{ __html: marked(currentDoc) }} />
            </main>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
