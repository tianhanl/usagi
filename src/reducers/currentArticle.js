import { FETCH_ARTICLE } from '../constants/actions';

const initalState = {
  item: {},
  isLoading: false
};

const currentArticle = (state = initalState, action) => {
  switch (action.type) {
    case `${FETCH_ARTICLE}_PENDING`:
      return { ...state, isLoading: true };
    case `${FETCH_ARTICLE}_FULFILLED`:
      return { ...state, isLoading: false, item: action.payload };
    default:
      return state;
  }
};

export default currentArticle;
