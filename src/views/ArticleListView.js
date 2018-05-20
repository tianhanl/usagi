import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';
import ArticleList from '../components/ArticleList';

class ArticleListView extends React.Component {
  componentDidMount() {
    const { fetchArticles } = this.props;
    fetchArticles(1);
  }

  render() {
    const { items } = this.props.articles;
    return <ArticleList articles={items} />;
  }
}

const mapStateToProps = ({ articles }) => ({
  articles
});
const mapDispatchToProps = dispatch => ({
  fetchArticles: page => dispatch(fetchArticles(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListView);
