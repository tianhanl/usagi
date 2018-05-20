import React from 'react';
import ArticleListItem from './ArticleListItem';

const ArticleList = props => {
  const { articles } = props;
  return (
    <ul>
      {articles.map(article => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </ul>
  );
};

export default ArticleList;
