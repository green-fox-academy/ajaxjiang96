import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { delayedIncrease } from '../redux/Counter/actionCreators';
import InputGroup from './InputGroup';

const DelayedIncreaser = () => {
  const { loading, amount } = useSelector((state) => state.counterReducer);
  const [delay, setDelay] = useState(1000);
  const dispatch = useDispatch();
  return (
    <section>
      <h1>The Delayed Increaser</h1>
      {loading ? <p>Updating...</p> : <p>{amount}</p>}
      <input value={delay} onChange={(event) => setDelay(Number.parseInt(event.target.value, 10))} placeholder="Delay (ms)" />
      <InputGroup type="number" buttonText="Increase" onClick={(value) => dispatch(delayedIncrease(value, delay))} defaultVal={1} />
    </section>
  );
};

export default DelayedIncreaser;
