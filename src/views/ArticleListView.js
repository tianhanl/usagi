import React from 'react';
import styled from 'styled-components';
import LabelListContainer from '../containers/LabelListContainer';
import ArticleListContainer from '../containers/ArticleListContainer';

const ArticleListViewContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: auto;
`;

class ArticleListView extends React.Component {
  render() {
    return (
      <ArticleListViewContainer>
        <LabelListContainer />
        <ArticleListContainer />
      </ArticleListViewContainer>
    );
  }
}

export default ArticleListView;
