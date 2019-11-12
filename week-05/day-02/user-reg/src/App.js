import React from 'react';
import RegistrationForm from './RegistrationForm';

function App() {
  const addAttendee = console.log;

  return (
    <>
      <RegistrationForm onSubmit={addAttendee} />
    </>
  );
}

export default App;
