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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Username
          <input
            name="username"
            className={errors.firstName && 'error'}
            defaultValue=""
            ref={register({
              required: true,
              pattern: /^[a-z]+$/i,
            })}
          />
          {errors.username && errors.username.type === 'required' && <span>This field is required</span>}
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

        <label>
          Password
          <input
            name="password"
            type="password"
            className={errors.password && 'error'}
            defaultValue=""
            ref={register({
              required: true,
              minLength: 8,
            })}
          />
          {errors.password && errors.password.type === 'required' && <span>This field is required</span>}
          {errors.password && errors.password.type === 'pattern' && <span>Password must be more thant 8 characters</span>}
        </label>

        <input type="submit" />
      </form>
    </section>
  );
}

export default RegistrationForm;
