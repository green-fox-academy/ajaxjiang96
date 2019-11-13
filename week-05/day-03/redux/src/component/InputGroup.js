import React, { useState } from 'react';

const InputGroup = ({
  type = 'text', buttonText, onClick, defaultVal = '',
}) => {
  const [value, setValue] = useState(defaultVal);

  const changeHandler = (event) => {
    const { value: val } = event.target;
    switch (type) {
      case 'number':
        setValue(Number.isNaN(val) ? value : parseInt(val, 10));
        break;
      default:
        setValue(val);
    }
  };

  const clickHandler = () => {
    onClick(value);
    switch (type) {
      case 'number':
        break;
      default:
        setValue('');
    }
  };

  return (
    <>
      <input type="text" value={value} onChange={changeHandler} />
      <button type="button" onClick={clickHandler}>{buttonText}</button>
    </>
  );
};

export default InputGroup;
