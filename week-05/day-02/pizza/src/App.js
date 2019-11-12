import React from 'react';
import PizzaCustomize from './PizzaCustomize';

function App() {
  const order = console.log;

  return (
    <>
      <PizzaCustomize onSubmit={order} />
    </>
  );
}

export default App;
