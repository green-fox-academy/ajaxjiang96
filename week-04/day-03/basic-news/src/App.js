import React from 'react';
import './App.css';
import ArticleListItem from './ArticleListItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      loading: true,
    };
  }

  componentDidMount() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const url = new URL(`http://slowwy.greenfox.academy/delay/${3000}/url/https://newsapi.org/v2/everything`);
    url.searchParams.append('q', 'China');
    url.searchParams.append('sortBy', 'publishedAt');
    url.searchParams.append('apiKey', apiKey);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        this.setState(() => ({
          news: res.articles,
          loading: false,
        }));
      });
  }

  render() {
    const { news, loading } = this.state;
    return (
      <>
        <header>
          <h1>China News</h1>
          <hr />
        </header>
        <main>

          {loading ? (
            <div className="lds-ripple">
              <div />
              <div />
            </div>
          )
            : (
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
            )}

        </main>
        <footer>
          <a href="https://newsapi.org" target="_blank" rel="noopener noreferrer">Powered by News API</a>
        </footer>
      </>
    );
  }
}

export default App;
