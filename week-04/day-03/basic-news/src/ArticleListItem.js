import React from 'react';
import PropTypes from 'prop-types';

const ArticleListItem = ({
  title, author, description, imgUrl,
}) => (
    // eslint-disable-next-line react/jsx-indent
    <section>
      <img src={imgUrl} alt={title} />
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{description}</p>
    </section>
    // eslint-disable-next-line indent
  );

export default ArticleListItem;

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

ArticleListItem.defaultProps = {
  author: 'N/A',
};
