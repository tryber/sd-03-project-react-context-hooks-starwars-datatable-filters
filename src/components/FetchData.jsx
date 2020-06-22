import React, { useEffect, useContext } from 'react';

import { dataPlanetsContext } from '../context/DataPlanets';
import fetchPlanets from '../actions/fetchPlanetsAction';
import './FetchData.css';

function FetchData() {
  const [state, dispatch] = useContext(dataPlanetsContext);
  const { loading } = state;

  useEffect(() => {
    if (loading) fetchPlanets()(dispatch);
  }, [dispatch, loading]);

  if (loading) return <div className="loading">Loading...</div>;
  return null;
}

export default FetchData;
