import { FETCH_ARTICLES } from '../constants/actions';

const initialState = {
  isLoading: false,
  currentPage: 1,
  items: []
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_ARTICLES}_PENDING`:
      return { ...state, isLoading: true };
    case `${FETCH_ARTICLES}_FULFILLED`:
      return { ...state, isLoading: false, items: action.payload };
    default:
      return state;
  }
};

export default articles;
