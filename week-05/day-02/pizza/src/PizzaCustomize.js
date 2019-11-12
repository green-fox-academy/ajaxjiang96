/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import useForm from 'react-hook-form';
import BaseField from './components/orderForm/BaseField';
import ToppingsField from './components/orderForm/ToppingsField';
import CutField from './components/orderForm/CutField';

function PizzaCustomize({ onSubmit }) {
  const {
    register, handleSubmit, errors, reset,
  } = useForm();

  const submit = (data) => {
    onSubmit({
      ...data,
    });
    reset();
  };

  const fieldProps = {
    register,
    errors,
  };

  return (
    <section>
      <h1>Tomino&#39;s</h1>
      <form onSubmit={handleSubmit(submit)}>
        <BaseField {...fieldProps} />
        <ToppingsField {...fieldProps} />
        <CutField {...fieldProps} />
        <label>
          <h2>Additional Comments</h2>
          <textarea type="radio" name="additionalComment" ref={register} />
        </label>
        <input type="submit" value="Place Order" />
      </form>
    </section>
  );
}

export default PizzaCustomize;
