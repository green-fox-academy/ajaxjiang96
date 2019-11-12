import React from 'react';

export default ({ register, errors }) => (
  <label>
    Location
    <select
      name="location"
      ref={register({
        required: true,
      })}
      defaultValue=""
      className={errors.base && 'error'}
    >
      <option disabled value="">---Please Select---</option>
      <option value="suzhou">Suzhou</option>
      <option value="shenzhen">Shenzhen</option>
      <option value="beijing">Beijing</option>
      <option value="shanghai">Shanghai</option>
    </select>
    {errors.base && errors.base.type === 'required' && <span>This field is required</span>}
  </label>
);
