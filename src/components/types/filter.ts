export interface FiltersState {
  sortBy: string;
  printType: string;
}

export enum FiltersActionTypes {
  SET_SORT_BY = 'SET_SORT_BY',
  SET_PRINT_TYPE = 'SET_PRINT_TYPE',
}

interface FiltersSortAction {
  type: FiltersActionTypes.SET_SORT_BY;
  payload: string;
}

interface FiltersPrintAction {
  type: FiltersActionTypes.SET_PRINT_TYPE;
  payload: string;
}

export type FiltersAction = FiltersSortAction | FiltersPrintAction;
