import React from 'react';
import RegistrationForm from './RegistrationForm';

function App() {
  const signup = console.log;

  return (
    <>
      <RegistrationForm onSubmit={signup} />
    </>
  );
}

export default App;
