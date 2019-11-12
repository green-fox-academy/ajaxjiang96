import React from 'react';

export default ({ register, errors }) => (
  <label>
    Last Name
    <input
      name="lastName"
      className={errors.lastName && 'error'}
      defaultValue=""
      ref={register({
        required: true,
        pattern: /^[a-z]+$/i,
      })}
    />
    {errors.lastName && errors.lastName.type === 'required' && <span>This field is required</span>}
    {errors.lastName && errors.lastName.type === 'pattern' && <span>Please input a valid last name</span>}
  </label>

);
