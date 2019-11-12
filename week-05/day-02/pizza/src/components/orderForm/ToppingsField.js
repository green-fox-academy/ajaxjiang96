import React from 'react';


export default ({ register }) => (
  <>
    <label>Toppings</label>
    <label className="checkbox label">
      <input type="checkbox" name="toppings[0]" ref={register} value="pepperoni" />
      Pepperoni
    </label>
    <label className="checkbox label">
      <input type="checkbox" name="toppings[1]" ref={register} value="steak" />
      Steak
    </label>
    <label className="checkbox label">
      <input type="checkbox" name="toppings[2]" ref={register} value="garlic-chicken" />
      Garlic Chicken
    </label>
    <label className="checkbox label">
      <input type="checkbox" name="toppings[3]" ref={register} value="mushroom" />
      Mushroom Yesss!
    </label>
  </>
);
