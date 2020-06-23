import React, { useEffect, useContext } from 'react';

import { dataPlanetsContext } from '../context/DataPlanets';
import fetchPlanets from '../actions/fetchPlanetsAction';
import './FetchData.css';

function FetchData() {
  const [{ isFetching }, dispatch] = useContext(dataPlanetsContext);

  useEffect(() => {
    if (isFetching) fetchPlanets()(dispatch);
  }, [dispatch, isFetching]);

  if (isFetching) return <div className="loading">Loading...</div>;
  return null;
}

export default FetchData;
