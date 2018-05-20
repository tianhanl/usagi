import React from 'react';
import styled from 'styled-components';

const ArticleListItemTime = styled.p`
  flex: 0 0 20%;
  color: #a9b6c5;
  margin: 0;
  padding: 0;
`;

const ArticleListItem = props => {
  const { created_at: createdAt } = props.article;
  return (
    <li>
      <ArticleListItemTime>{createdAt}</ArticleListItemTime>
    </li>
  );
};

export default ArticleListItem;
