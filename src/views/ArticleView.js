import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ArticleContent from '../components/ArticleContent';
import { fetchArticle } from '../actions';

const Wrapper = styled.div`
  width: 80%;
  max-width: 600px;
  margin: auto;
  position: relative;
  padding: 0 1rem 1rem;
  text-align: left;
`;

class ArticleView extends React.Component {
  componentDidMount() {
    const { match, fetchArticle } = this.props;
    fetchArticle(Number.parseInt(match.params.id, 10));
    const blogName = 'usagi';
    document.title = `${blogName} | Article`;
  }
  render() {
    const { currentArticle } = this.props;
    return (
      <Wrapper>
        <ArticleContent article={currentArticle.item} />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ currentArticle }) => ({
  currentArticle
});

const mapDispatchToProps = dispatch => ({
  fetchArticle: id => dispatch(fetchArticle(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
