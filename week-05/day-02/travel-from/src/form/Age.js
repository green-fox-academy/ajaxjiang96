import React from 'react';

export default ({ register, errors }) => (
  <label>
    Age
    <input
      name="age"
      type="number"
      className={errors.age && 'error'}
      defaultValue=""
      ref={register({
        required: true,
        max: 99,
        min: 16,
      })}
    />
    {errors.age && errors.age.type === 'required' && <span>This field is required</span>}
    {errors.age && errors.age.type === 'max' && <span>The max age we can take is 99. If you are over 99 please contact us at <a href="tel:555-555-5555">555-555-5555</a></span>}
    {errors.age && errors.age.type === 'min' && <span>The minimum age we can take is 16. If you are under 16 please contact us at <a href="tel:555-555-5555">555-555-5555</a></span>}
    {/* {errors.age && errors.age.type === 'pattern' && <span>Please enter a valid number.</span>} */}
  </label>

);
