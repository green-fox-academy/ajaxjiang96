import React from 'react';

export default ({ register }) => (
  <>
    <label>Dietary Restrictions</label>
    <label className="checkbox label">
      <input type="checkbox" name="dietaryRestrictions[0]" ref={register} value="vegetarian" />
      Vegetarian
    </label>
    <label className="checkbox label">
      <input type="checkbox" name="dietaryRestrictions[1]" ref={register} value="kosher" />
      Kosher
    </label>
    <label className="checkbox label">
      <input type="checkbox" name="dietaryRestrictions[2]" ref={register} value="lactose-free" />
      Lactose Free
    </label>
    <label className="checkbox label">
      <input type="checkbox" name="dietaryRestrictions[3]" ref={register} value="meat-lover" />
      Meat Lover
    </label>
  </>
);
