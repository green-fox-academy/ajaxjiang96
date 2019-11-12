import React from 'react';

export default ({ register, errors, watch }) => {
  const genderOther = watch('gender') === 'other';
  return (
    <>
      <label>Gender</label>
      <label className="radio label">
        <input type="radio" name="gender" ref={register({ required: true })} value="male" />
        Male
      </label>
      <label className="radio label">
        <input type="radio" name="gender" ref={register({ required: true })} value="female" />
        Female
      </label>
      <label className="radio label">
        <input type="radio" name="gender" ref={register({ required: true })} value="other" />
        Identify Yourself
        {genderOther && (
          <input
            disabled={!genderOther}
            name="otherGender"
            className={errors.gender && 'error'}
            ref={register({ required: genderOther })}
          />
        )}
      </label>
      {errors.otherGender && errors.otherGender.type === 'required' && <span>This field is required</span>}
    </>
  );
};
