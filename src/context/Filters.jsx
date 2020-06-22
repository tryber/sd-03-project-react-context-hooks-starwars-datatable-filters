import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { CHANGE_VALUES, CREATE_NUMERIC_FILTER, REMOVE_FILTER } from '../actions/NumFilterActions';
import { ON_CHANGE_ORDER, ACTIVATE_ORDER } from '../actions/orderActions';
import { TYPE_NAME } from '../actions/SearchTextAction';

const allValuesSetted = (obj) => (Object.values(obj).every((value) => value !== ''));

const defaultNumFilterElem = {
  column: '',
  comparison: '',
  value: '',
};

const removeByIndex = (array, id) => ([...array.slice(0, id), ...array.slice(id + 1)]);

const INITIAL_STATE = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: { column: 'Name', sort: 'ASC' },
  inProgress: defaultNumFilterElem,
  orderInProgerss: { column: 'Name', sort: 'ASC' },
};

function filtersReducer(state = INITIAL_STATE, action) {
  const { filterByNumericValues: numFilters, inProgress, orderInProgerss } = state;
  switch (action.type) {
    case TYPE_NAME: return { ...state, filterByName: { name: action.text } };
    case CHANGE_VALUES:
      return ({ ...state, inProgress: { ...inProgress, [action.filter]: action.value } });
    case CREATE_NUMERIC_FILTER:
      return (allValuesSetted(inProgress)) ? ({
        ...state,
        filterByNumericValues: [...numFilters, inProgress],
        inProgress: defaultNumFilterElem,
      }) : state;
    case REMOVE_FILTER:
      return ({ ...state, filterByNumericValues: removeByIndex(numFilters, action.id) });
    case ON_CHANGE_ORDER:
      return ({ ...state, orderInProgerss: { ...orderInProgerss, [action.prop]: action.value } });
    case ACTIVATE_ORDER: return ({ ...state, order: orderInProgerss });
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
