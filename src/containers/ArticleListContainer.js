import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import ArticleList from '../components/ArticleList';
import LoadingIndicator from '../components/LoadingIndicator';

class ArticleListContainer extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles(1);
  }

  render() {
    const { items, isLoading } = this.props.articles;
    const { selectedItems } = this.props.labels;
    const selctedArticles = items.filter(article =>
      article.labels.find(label => selectedItems[label.id])
    );
    if (isLoading) return <LoadingIndicator />;
    return <ArticleList articles={selctedArticles} />;
  }
}
const mapStateToProps = ({ articles, labels }) => ({
  articles,
  labels
});
const mapDispatchToProps = dispatch => ({
  fetchArticles: page => dispatch(fetchArticles(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ArticleListContainer
);
