import React from 'react';

export default ({ register, errors }) => (
  <>
    <label>Base</label>
    <label>
      <select
        name="base"
        ref={register({
          required: true,
        })}
        defaultValue=""
        className={errors.base && 'error'}
      >
        <option disabled value="">---Please Select---</option>
        <option value="hand-tossed">Hand Tossed</option>
        <option value="pan">Pan Pizza</option>
        <option value="crispy">Crispy</option>
        <option value="ultra-crispy">Ultra Crispy</option>
      </select>
      {errors.base && errors.base.type === 'required' && <span>This field is required</span>}
    </label>
  </>
);
