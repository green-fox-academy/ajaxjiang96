import React, { useState } from 'react';
import Gallery from './components/Gallery';
import imagesData from './data/images.json';

function App() {
  const [q, setQ] = useState('Minimal');
  const [images, setImages] = useState(imagesData.photos.results);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handleChange = (e) => {
    setQ(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.q.blur();
    const url = new URL('https://api.unsplash.com/search/');
    url.searchParams.append('query', q);
    url.searchParams.append('client_id', process.env.REACT_APP_UNSPLASH_API_KEY);
    setLoading(true);
    setError('');
    setImages([]);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (!res.photos.results.length) {
          setError('Cannot Find Related Images');
        } else {
          setImages(res.photos.results);
          setLoading(false);
          document.title = `${q} | My Unsplash Gallery`;
        }
      })
      .catch(() => setError('Cannot communicate with Unsplash API'));
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <h1><input type="text" name="q" value={q} placeholder={q} onChange={handleChange} onFocus={(e) => e.target.select()} /></h1>
        </form>
      </header>
      {
        error
          ? <p>{error}</p>
          : <Gallery images={images} loading={loading} />
      }
      <footer>
        Powered by
        {' '}
        <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>
      </footer>
    </>
  );
}

export default App;
