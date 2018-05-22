import React from 'react';
import styled from 'styled-components';
import ArticleListItem from './ArticleListItem';
import { PaddingLessUl } from './ShardStyledComponents';

const Notice = styled.p`
  text-align: center;
  color: #a8a8a8;
`;

const ArticleList = props => {
  const { articles } = props;
  if (!articles || !articles.length) {
    return <Notice>Well, empty article list</Notice>;
  }
  return (
    <PaddingLessUl>
      {articles.map(article => (
        <ArticleListItem key={article.id} article={article} />
      ))}
    </PaddingLessUl>
  );
};

export default ArticleList;
