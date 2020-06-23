import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import {
  TYPE_NAME,
  CREATE_NUMERIC_FILTER,
  REMOVE_FILTER,
  ACTIVATE_ORDER,
} from '../actions/filterActions';

const removeByIndex = (array, id) => ([...array.slice(0, id), ...array.slice(id + 1)]);

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
  orderInProgerss: { column: 'Name', sort: 'ASC' },
};

function filtersReducer(state = INITIAL_STATE, action) {
  const { filterByNumericValues: numFilters, orderInProgerss } = state;
  switch (action.type) {
    case TYPE_NAME: return { ...state, filterByName: { name: action.text } };
    case CREATE_NUMERIC_FILTER:
      return ({
        ...state,
        filterByNumericValues: [...numFilters, action.numericFilter],
      });
    case REMOVE_FILTER:
      return ({ ...state, filterByNumericValues: removeByIndex(numFilters, action.id) });
    case ACTIVATE_ORDER: return ({ ...state, order: { ...action.sortFilter } });
    default: return state;
  }
}

export const filtersContext = createContext(INITIAL_STATE);

function FiltersProvider({ children }) {
  const [state, dispatch] = useReducer(filtersReducer, INITIAL_STATE);

  return (
    <filtersContext.Provider value={[state, dispatch]}>
      {children}
    </filtersContext.Provider>
  );
}

FiltersProvider.propTypes = { children: PropTypes.node.isRequired };

export default FiltersProvider;
