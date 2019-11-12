/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import useForm from 'react-hook-form';

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

  return (
    <section>
      <h1>Tomino&#39;s</h1>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <h2>Base</h2>
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

        <h2>Toppings</h2>
        <label className="checkbox label">
          <input type="checkbox" name="toppings[0]" ref={register} value="pepperoni" />
          Pepperoni
        </label>
        <label className="checkbox label">
          <input type="checkbox" name="toppings[1]" ref={register} value="steak" />
          Steak
        </label>
        <label className="checkbox label">
          <input type="checkbox" name="toppings[2]" ref={register} value="garlic-chicken" />
          Garlic Chicken
        </label>
        <label className="checkbox label">
          <input type="checkbox" name="toppings[3]" ref={register} value="mushroom" />
          Mushroom Yesss!
        </label>

        <h2>Cut</h2>
        <label className="radio label">
          <input type="radio" name="cut" ref={register} value />
          Yes
        </label>
        <label className="radio label">
          <input type="radio" name="cut" ref={register} value={false} />
          No
        </label>
        {errors.base && errors.base.type === 'required' && <span>This field is required</span>}

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
