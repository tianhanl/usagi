import actions from '../constants/actions';
import { getArticles, getLabels, getArticle } from '../utils/api';

export const fetchArticles = page => ({
  type: actions.FETCH_ARTICLES,
  payload: getArticles(page)
});

export const fetchArticle = id => ({
  type: actions.FETCH_ARTICLE,
  payload: getArticle(id)
});

export const fetchLabels = () => ({
  type: actions.FETCH_LABELS,
  payload: getLabels()
});

export const selectLabel = labelId => ({
  type: actions.SELECT_LABEL,
  labelId
});

export const deselectLabel = labelId => ({
  type: actions.DESELECT_LABEL,
  labelId
});
