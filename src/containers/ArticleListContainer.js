import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import ArticleList from '../components/ArticleList';

class ArticleListContainer extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles(1);
  }

  render() {
    const { items } = this.props.articles;
    const { selectedItems } = this.props.labels;
    const selctedArticles = items.filter(article =>
      article.labels.find(label => selectedItems[label.id])
    );
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
