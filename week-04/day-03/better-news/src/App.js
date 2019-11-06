/* eslint-disable no-nested-ternary */
import React from 'react';
import './App.css';
import ArticleListItem from './ArticleListItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: true,
      country: 'cn',
    };
    this.getNews = this.getNews.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getNews();
  }

  componentDidUpdate(prevProps, prevState) {
    const { country } = this.state;
    if (prevState.country !== country && country.length >= 2) {
      this.getNews();
    }
  }

  getNews() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const url = new URL('https://newsapi.org/v2/top-headlines');
    const { country } = this.state;
    url.searchParams.append('country', country);
    url.searchParams.append('sortBy', 'publishedAt');
    url.searchParams.append('apiKey', apiKey);
    this.setState({
      loading: true,
      news: [],
    }, () => fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState(() => ({
          news: res.articles,
          loading: false,
        }));
      })
      .catch(() => {
        // console.error(error);
        this.setState(() => ({
          news: [],
          loading: false,
        }));
      }));
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState(() => ({
      country: value,
    }));
  }

  renderNewsList() {
    const { news, country } = this.state;
    return news.length ? (
      <ul>
        {news.map((article) => {
          const {
            title, author, description, urlToImage: imgUrl,
          } = article;
          return (
            <li key={title}>
              <ArticleListItem
                title={title}
                author={author}
                description={description}
                imgUrl={imgUrl}
              />
            </li>
          );
        })}
      </ul>
    )
      : (
        <p>
          Cannot get news about [
          {country}
          ]
        </p>
      );
  }

  render() {
    const { loading, country } = this.state;
    return (
      <>
        <header>
          <h1>China News</h1>
          <hr />
        </header>

        <main>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="country" placeholder="country code" value={country} onChange={this.handleChange} />
          </form>
          {loading ? (
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          )
            : this.renderNewsList()}

        </main>
        <footer>
          <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">Powered by News API</a>
        </footer>
      </>
    );
  }
}

export default App;
