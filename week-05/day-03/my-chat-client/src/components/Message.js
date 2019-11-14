/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import * as moment from 'moment';
import { useSelector } from 'react-redux';

export default ({
  user, text, style, createdAt,
}) => {
  const localUser = useSelector((state) => state.user);
  return (
    <li className={user === localUser ? 'me' : undefined}>
      <span>{user}</span>
      <section style={style}>
        <p>
          {`${text}`}
        </p>
      </section>
      <span className="time-ago">{moment(createdAt).fromNow()}</span>
    </li>
  );
};
