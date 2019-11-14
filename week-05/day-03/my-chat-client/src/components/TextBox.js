/* eslint-disable react/button-has-type */
import React from 'react';
import useForm from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { postMessage, fetchMessages } from '../redux/actionCreator';

export default () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const send = ({ message }) => {
    if (message) dispatch(postMessage(user, message));
    reset();
  };

  const handleHeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(send)();
    }
  };

  return (
    <form onSubmit={handleSubmit(send)}>
      <textarea name="message" ref={register} placeholder="New Message..." onKeyDown={handleHeyDown} />
      <div className="button-group">
        <button type="submit" className="approve">Send</button>
        <button type="button" className="secondary" onClick={() => dispatch(fetchMessages())}>Refresh</button>
      </div>
    </form>
  );
};
