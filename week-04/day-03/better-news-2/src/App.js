/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './App.css';
import ArticleListItem from './ArticleListItem';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState('cn');
  const [error, setError] = useState(false);

  const getNews = () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const url = new URL('https://newsapi.org/v2/top-headlines');
    url.searchParams.append('country', country);
    url.searchParams.append('sortBy', 'publishedAt');
    url.searchParams.append('apiKey', apiKey);
    setNews([]);
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setNews(res.articles);
        setLoading(false);
        setError(!res.articles.length);
      })
      .catch(() => {
        setNews([]);
        setLoading(false);
        setError(true);
      });
  };

  const updateCountry = () => {
    setError(false);
    if (country.length >= 2) {
      getNews();
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCountry(value);
  };

  const renderLoader = () => (
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  );

  const renderError = () => (
    <p>
      Cannot get news about [
      {country}
      ]
    </p>
  );

  const renderList = () => (
    <ul>
      {news.map((article) => {
        const {
          title, author, description, urlToImage: imgUrl,
        } = article;
        return (
          <ArticleListItem
            key={title}
            title={title}
            author={author}
            description={description}
            imgUrl={imgUrl}
          />
        );
      })}
    </ul>
  );

  useEffect(getNews, []);
  useEffect(updateCountry, [country]);

  return (
    <>
      <header>
        <h1>
          {country.toUpperCase()}
          {' '}
          News
        </h1>
        <hr />
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="country" placeholder="country code" value={country} onChange={handleChange} />
        </form>
      </header>
      <main>
        {loading ? renderLoader() : renderList()}
        {error ? renderError() : null}
      </main>
      <footer>
        <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">Powered by News API</a>
      </footer>
    </>
  );
}

export default App;
