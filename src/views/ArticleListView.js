import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import ArticleList from '../components/ArticleList';
import styled from 'styled-components';
import LabelListContainer from '../containers/LabelListContainer';

const ArticleListViewContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  margin: auto;
`;

class ArticleListView extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles(1);
  }

  render() {
    const { items } = this.props.articles;
    return (
      <ArticleListViewContainer>
        <LabelListContainer />
        <ArticleList articles={items} />
      </ArticleListViewContainer>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  articles
});
const mapDispatchToProps = dispatch => ({
  fetchArticles: page => dispatch(fetchArticles(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView);
