/* eslint-disable no-alert */
import React from 'react';
import TravelForm from './TravelForm';
import logo from './assets/logo.png';

function App() {
  const order = ({
    firstName, lastName, age, gender, dietaryRestrictions,
  }) => {
    alert(
      `First Name: ${firstName}
Last Name: ${lastName}
Age: ${age}
Gender: ${gender}
Dietary Restrictions: ${dietaryRestrictions.length ? dietaryRestrictions.join(', ') : 'None'}`,
    );
  };

  return (
    <>
      <h1><img src={logo} className="logo" alt="China Eastern 中國西方航空" /></h1>
      <TravelForm onSubmit={order} />
    </>
  );
}

export default App;
