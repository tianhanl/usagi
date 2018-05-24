import { combineReducers } from 'redux';
import articles from './articles';
import labels from './labels';
import currentArticle from './currentArticle';

export default combineReducers({
  articles,
  labels,
  currentArticle
});
