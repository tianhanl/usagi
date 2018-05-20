import {
  FETCH_LABELS,
  SELECT_LABEL,
  DESELECT_LABEL
} from '../constants/actions';

const initalState = {
  isLoading: false,
  items: [],
  selectedItems: []
};

const labels = (state = initalState, action) => {
  switch (action.type) {
    case `${FETCH_LABELS}_PENDING`:
      return { ...state, isLoading: true };
    case `${FETCH_LABELS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        selectedItems: action.payload
      };
    case SELECT_LABEL:
      return {
        ...state,
        selectedItems: [
          ...state.selectedItems,
          state.items.find(item => item.id === action.labelId)
        ]
      };
    case DESELECT_LABEL:
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          item => item.id !== action.labelId
        )
      };
    default:
      return state;
  }
};

export default labels;
