import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';


import { dataPlanetsContext } from '../context/DataPlanets';
import fetchPlanets from '../actions/fetchPlanetsAction';
import './FetchData.css';

function FetchData() {
  const { dispatch } = useContext(dataPlanetsContext);

  useEffect(() => { fetchPlanets()(dispatch) }, [])

  return <div className="loading">Loading...</div>;
}

// const mapDipatchToProps = (dispatch) => ({
//   fetchPlanets: () => dispatch(fetchPlanets()),
// });

export default FetchData;
