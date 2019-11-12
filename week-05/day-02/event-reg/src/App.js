import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import AttendeeTable from './AttendeeTable';

function App() {
  const [attendees, setAttendees] = useState([]);

  const addAttendee = (attendee) => {
    setAttendees([...attendees, attendee]);
  };

  return (
    <>
      <RegistrationForm onSubmit={addAttendee} />
      <AttendeeTable attendees={attendees} />
    </>
  );
}

export default App;
