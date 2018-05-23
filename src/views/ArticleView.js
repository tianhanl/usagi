import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ArticleContent from '../components/ArticleContent';
import { setActiveArticleId } from '../actions';

const Wrapper = styled.div`
  width: 80%;
  max-width: 740px;
  margin: auto;
  position: relative;
  padding: 0 1rem 1rem;
  text-align: left;
`;

class ArticleView extends React.Component {
  componentDidMount() {
    const { match, setActiveArticleId } = this.props;
    setActiveArticleId(Number.parseInt(match.params.id, 10));
    const blogName = 'usagi';
    document.title = `${blogName} | Article`;
  }
  render() {
    const { articles, activeArticleId } = this.props;
    const activeArticle = articles.items.find(
      article => article.id === activeArticleId
    );
    if (!activeArticle || !activeArticle.body) {
      return <Wrapper>No article with this id exists</Wrapper>;
    }
    return (
      <Wrapper>
        <ArticleContent article={activeArticle} />
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ articles, activeArticleId }) => ({
  articles,
  activeArticleId
});

const mapDispatchToProps = dispatch => ({
  setActiveArticleId: id => dispatch(setActiveArticleId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
