import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from './redux/actionCreator';
import Post from './components/Post';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const error = useSelector((state) => state.error);
  const loadingPosts = useSelector((state) => state.loadingPosts);
  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);
  return (
    <ul>
      {loadingPosts && <p>Loading...</p>}
      {
        error ? <p>{error}</p> : posts.map((post) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Post key={post.id} {...post} />
        ))
      }
    </ul>
  );
}

export default App;
