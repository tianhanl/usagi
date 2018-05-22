import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { StyledRouterLink } from './ShardStyledComponents';

const ArticleListItemTime = styled.p`
  flex: 0 0 20%;
  color: #a9b6c5;
  margin: 0;
  padding: 0;
`;

const ArticleListItemTitle = styled.h3`
  flex: 1, 1, 80%;
  font-size: 1.5em;
  margin: 0;
  margin-top: -0.25em;
  padding: 0;
`;

const ArticleListItemContainer = styled.li`
  border-bottom: 1px solid #a9b6c5;
  display: block;
  padding: 1rem 0 1.5rem 0;
  margin-bottom: 1em;
  text-align: left;
  display: flex;
`;

const ArticleListItem = props => {
  const { created_at: createdAt, title, id } = props.article;
  return (
    <ArticleListItemContainer>
      <ArticleListItemTime>
        {dayjs(createdAt).format('MMM YYYY')}
      </ArticleListItemTime>
      <ArticleListItemTitle>
        {<StyledRouterLink to={`/${id}`}>{title}</StyledRouterLink>}
      </ArticleListItemTitle>
    </ArticleListItemContainer>
  );
};

export default ArticleListItem;
