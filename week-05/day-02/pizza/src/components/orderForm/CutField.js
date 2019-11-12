import React from 'react';

export default ({ register, errors }) => (
  <>
    <label>Cut</label>
    <label className="radio label">
      <input type="radio" name="cut" ref={register({ required: true })} value />
      Yes
    </label>
    <label className="radio label">
      <input type="radio" name="cut" ref={register({ required: true })} value={false} />
      No
    </label>
    {errors.cut && errors.cut.type === 'required' && <span>This field is required</span>}
  </>
);
