import {
  FETCH_LABELS,
  SELECT_LABEL,
  DESELECT_LABEL
} from '../constants/actions';

const initalState = {
  isLoading: false,
  items: [],
  selectedItems: {}
};

const labels = (state = initalState, action) => {
  switch (action.type) {
    case `${FETCH_LABELS}_PENDING`:
      return { ...state, isLoading: true };
    case `${FETCH_LABELS}_FULFILLED`:
      const selectedItems = {};
      action.payload.forEach(element => {
        selectedItems[element.id] = true;
      });
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        selectedItems: selectedItems
      };
    case SELECT_LABEL:
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          [action.labelId]: true
        }
      };
    case DESELECT_LABEL:
      return {
        ...state,
        selectedItems: {
          ...state.selectedItems,
          [action.labelId]: false
        }
      };
    default:
      return state;
  }
};

export default labels;
