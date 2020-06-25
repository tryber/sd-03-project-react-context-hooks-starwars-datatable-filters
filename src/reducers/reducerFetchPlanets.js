import * as types from '../store/actions/actionTypes';

const reducerFetchPlanets = (state, action) => {
  switch (action.type) {
    case types.REQUEST_API:
      return { ...state, loading: true };
    case types.RECEIVE_API_SUCCESS:
      return {
        ...state,
        data: [...action.data],
        loading: false,
      };
    case types.RECEIVE_API_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default reducerFetchPlanets;
