/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import useForm from 'react-hook-form';
import FirstName from './form/FirstName';
import LastName from './form/LastName';
import Age from './form/Age';
import Gender from './form/Gender';
import Location from './form/Location';
import DietaryRestrictions from './form/DietaryRestrictions';

function TravelForm({ onSubmit }) {
  const {
    register, handleSubmit, errors, reset, watch,
  } = useForm();

  const beforeSubmit = ({
    gender, dietaryRestrictions, otherGender, ...rest
  }) => {
    const finalGender = gender === 'other' ? otherGender : gender;
    const filteredDiet = dietaryRestrictions.filter((restriction) => restriction);
    onSubmit({
      ...rest,
      gender: finalGender,
      dietaryRestrictions: filteredDiet,
    });
    reset();
  };


  const fieldProps = {
    register,
    errors,
  };

  return (
    <section>
      <form onSubmit={handleSubmit(beforeSubmit)}>
        <FirstName {...fieldProps} />
        <LastName {...fieldProps} />
        <Age {...fieldProps} />
        <Gender {...fieldProps} watch={watch} />
        <Location {...fieldProps} />
        <DietaryRestrictions {...fieldProps} />
        <input type="submit" value="Book Now" />
      </form>
    </section>
  );
}

export default TravelForm;
