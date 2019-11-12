import React from 'react';

export default ({ register, errors }) => (
  <label>
    First Name
    <input
      name="firstName"
      className={errors.firstName && 'error'}
      defaultValue=""
      ref={register({
        required: true,
        pattern: /^[a-z]+$/i,
      })}
    />
    {errors.firstName && errors.firstName.type === 'required' && <span>This field is required</span>}
    {errors.firstName && errors.firstName.type === 'pattern' && <span>Please input a valid first name</span>}
  </label>
);
