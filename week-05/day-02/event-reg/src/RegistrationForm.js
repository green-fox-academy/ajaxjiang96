/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import useForm from 'react-hook-form';

function RegistrationForm({ onSubmit }) {
  const {
    register, handleSubmit, errors, reset,
  } = useForm();

  const submit = (data) => {
    onSubmit({
      ...data,
    });
    reset();
  };

  return (
    <section>
      <h1>Event Registration Form</h1>
      <form onSubmit={handleSubmit(submit)}>
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

        <label>
          Email
          <input
            name="email"
            type="email"
            className={errors.email && 'error'}
            defaultValue=""
            ref={register({
              required: true,
              pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
            })}
          />
          {errors.email && errors.email.type === 'required' && <span>This field is required</span>}
          {errors.email && errors.email.type === 'pattern' && <span>Please input a valid E-mail address</span>}
        </label>

        <input type="submit" />
      </form>
    </section>
  );
}

export default RegistrationForm;
