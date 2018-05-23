import { SET_ACTIVE_ARTICLE_ID } from '../constants/actions';

const initalState = 0;

const activeArticleId = (state = initalState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ARTICLE_ID:
      return action.articleId;
    default:
      return state;
  }
};

export default activeArticleId;
