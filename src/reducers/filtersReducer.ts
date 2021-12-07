import { FiltersAction, FiltersActionTypes, FiltersState } from '../components/types/filter';

const initialState: FiltersState = {
  sortBy: 'relevance',
  printType: 'all',
};

export default function filtersReducer(state = initialState, action: FiltersAction): FiltersState {
  switch (action.type) {
    case FiltersActionTypes.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case FiltersActionTypes.SET_PRINT_TYPE:
      return {
        ...state,
        printType: action.payload,
      };
    default:
      return state;
  }
}
