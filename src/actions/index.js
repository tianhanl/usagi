import actions from '../constants/actions';
import { requestArticles } from '../utils/api';

export const fetchArticles = page => ({
  type: actions.FETCH_ARTICLES,
  payload: requestArticles(page)
});
