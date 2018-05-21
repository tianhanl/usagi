import { combineReducers } from 'redux';
import articles from './articles';
import labels from './labels';

export default combineReducers({
  articles,
  labels
});
