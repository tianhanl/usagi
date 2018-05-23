import { combineReducers } from 'redux';
import articles from './articles';
import labels from './labels';
import activeArticleId from './activeArticleId';

export default combineReducers({
  articles,
  labels,
  activeArticleId
});
