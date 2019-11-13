import React from 'react';
import Increaser from './component/Increaser';
import Decreaser from './component/Decreaser';
import Setter from './component/Setter';
import Resetter from './component/Resetter';
import Tags from './component/Tags';
import AddTag from './component/AddTag';
import RemoveTag from './component/RemoveTag';
import ComplexCounter from './component/ComplexCounter';
import RemoveTags from './component/RemoveTags';
import DelayedIncreaser from './component/DelayedIncreaser';

const App = () => (
  <>
    <div className="row counter">
      <Increaser />
      <DelayedIncreaser />
      <Decreaser />
      <Setter />
      <Resetter />
    </div>
    <div className="row tags">
      <Tags />
      <AddTag />
      <ComplexCounter />
      <RemoveTag />
      <RemoveTags />
    </div>
  </>
);

export default App;
