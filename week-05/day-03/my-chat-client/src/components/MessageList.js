/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from './Message';
import { fetchMoreMessages } from '../redux/actionCreator';

export default () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const error = useSelector((state) => state.error);
  const page = useSelector((state) => state.lazyIndex);
  const loadingMessages = useSelector((state) => state.loadingMessages);
  const count = useSelector((state) => state.messageCount);

  const handleScroll = (e) => {
    const tar = e.target;
    if (
      !loadingMessages
      && count > (page * 20)
      && tar.scrollHeight - tar.scrollTop < (window.innerHeight - 100)
    ) {
      dispatch(fetchMoreMessages(page));
    }
    // console.log(tar.scrollTop, tar.scrollHeight, window.innerHeight);
  };

  return (
    <ul onScroll={handleScroll}>
      {loadingMessages && <p>Loading...</p>}
      {
        error
          ? <p>{error}</p>
          : messages
            // .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((message) => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Message key={message.id} {...message} />
            ))
      }
    </ul>
  );
};
