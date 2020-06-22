import React, { useEffect, useContext } from 'react';

import { dataPlanetsContext } from '../context/DataPlanets';
import fetchPlanets from '../actions/fetchPlanetsAction';
import './FetchData.css';

function FetchData() {
  const { dispatch } = useContext(dataPlanetsContext);

  useEffect(() => {
    fetchPlanets()(dispatch);
  }, [dispatch]);

  return <div className="loading">Loading...</div>;
}

export default FetchData;
