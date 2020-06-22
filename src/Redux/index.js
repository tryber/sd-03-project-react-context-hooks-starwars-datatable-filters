const initialState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

export const SELECT_CHANGED = 'SELECT_CHANGED';

export const FILTER_COLUMN = 'FILTER_COLUMN';

export const UNFILTER_COLUMN = 'UNFILTER_COLUMN';

export const selectChanged = (...select) => ({
  type: SELECT_CHANGED,
  payload: select,
});

export const filterColumn = (column) => ({
  type: FILTER_COLUMN,
  payload: column,
});

export const unfilterColumn = (column) => ({
  type: UNFILTER_COLUMN,
  payload: column,
});

const searchReducer = (state = initialState, action) => {
  const { payload, text, type } = action;
  switch (type) {
    case TEXT_CHANGED:
      

    case SELECT_CHANGED:
      return {
        ...state,
        filterByNumericValues: [...state.filterByNumericValues.concat(payload)],
      };

    case FILTER_COLUMN:
      return {
        ...state,
        columnFilter: [...state.columnFilter, payload],
      };

    case UNFILTER_COLUMN:
      return {
        ...state,
        columnFilter: state.columnFilter.filter(
          (column) => column !== payload,
        ),
      };

    default:
      return state;
  }
};
