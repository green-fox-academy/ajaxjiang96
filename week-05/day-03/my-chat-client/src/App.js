import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMessages } from './redux/actionCreator';
import TextBox from './components/TextBox';
import MessageList from './components/MessageList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);
  return (
    <>
      <TextBox />
      <MessageList />
    </>
  );
}

export default App;
