import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import searchReducer from './searchReducer';

const initialState = {
  data: [],
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  isRequesting: false,
};

export const REQUESTING = 'REQUESTING';
export const RECEIVED = 'RECEIVED';

export const requesting = () => ({
  type: REQUESTING,
});

export const received = (data) => ({
  type: RECEIVED,
  payload: data,
});

export const requestAction = () => (dispatch) => {
  dispatch(requesting());

  return request()
    .then(
      (results) => dispatch(received(results)),
    );
};

const requestReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case REQUESTING:
      return {
        ...state,
        isRequesting: true,
      };

    case RECEIVED:
      return {
        data: payload.results,
        isRequesting: false,
      };

    default:
      return state;
  }
};

export const TEXT_CHANGED = 'TEXT_CHANGED';

export const SELECT_CHANGED = 'SELECT_CHANGED';

export const FILTER_COLUMN = 'FILTER_COLUMN';

export const UNFILTER_COLUMN = 'UNFILTER_COLUMN';

export const textChanged = (text) => ({
  type: TEXT_CHANGED,
  text,
});

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
      return {
        ...state,
        filterByName: {
          name: text,
        },
      };

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

const rootReducer = combineReducers({
  requestReducer,
  filters: searchReducer,
});

export default rootReducer;
