import React from 'react';
import ArticleListItem from './ArticleListItem';
import { PaddingLessUl } from './ShardStyledComponents';

const ArticleList = props => {
  const { articles } = props;
  return (
    <PaddingLessUl>
      {articles.map(article => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </PaddingLessUl>
  );
};

export default ArticleList;
