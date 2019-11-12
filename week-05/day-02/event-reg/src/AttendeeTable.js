import React from 'react';

function AttendeeTable({ attendees }) {
  return (
    <section>
      <h1>Attendees</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => (
            <tr key={attendee.email}>
              <td>{attendee.firstName}</td>
              <td>{attendee.lastName}</td>
              <td>{attendee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {`Total: ${attendees.length}`}
    </section>
  );
}

export default AttendeeTable;
