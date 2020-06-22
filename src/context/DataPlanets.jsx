import React, { createContext, useReducer } from 'react';
// import PropTypes from 'prop-types';

export const REQUEST_PLANETS = 'REQUEST_PLANETS';
export const FETCH_PLANETS_SUCESS = 'FETCH_PLANETS_SUCESS';
export const FETCH_PLANETS_FAILURE = 'FETCH_PLANETS_FAILURE';

const INITIAL_STATE = {
  isFetching: true,
  data: [],
  error: '',
};

export const dataPlanetsContext = createContext(INITIAL_STATE);

function dataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_PLANETS: 
      return ({ ...state, isFetching: true });

    case FETCH_PLANETS_SUCESS:
      return ({
        ...state,
        isFetching: false,
        data: [...action.planets],
        headers: [...action.headers],
      });

    case FETCH_PLANETS_FAILURE:
      return ({
        ...state,
        isFetching: false,
        error: action.error,
      });

    default:
      return state;
  }
}

function DataPlanetsProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, INITIAL_STATE);

  return (
    <dataPlanetsContext.Provider value={{ state, dispatch }}>
      {children}
    </dataPlanetsContext.Provider>
  );
}

DataPlanetsProvider.propTypes = {
  // children: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

export default DataPlanetsProvider;
