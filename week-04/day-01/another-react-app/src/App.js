import React from 'react';
import './App.css';
import data from './data';
import CheckboxList from './checkbox-list';
import Hotel from './Hotel';

function App() {
  const {
    hotels, filters: {
      'Star rating': stars,
      'Property type': types,
    },
  } = data;

  function book(e) {
    // eslint-disable-next-line no-console
    console.log(e.target);
  }

  return (
    <>
      <header>
        <h1>Hotel Booking</h1>
      </header>
      <main>
        <div className="filters">
          <CheckboxList list={stars} title="Star rating" />
          <CheckboxList list={types} title="Property type" />
        </div>
        <div className="hotels">
          <h2>Hotel List</h2>
          <ul>
            {hotels.map((hotel) => {
              const key = hotel.name.toLowerCase().split(' ').join('-');
              const { name, description, imageURL: img } = hotel;
              return (
                <Hotel key={key} name={name} description={description} img={img} book={book} />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
