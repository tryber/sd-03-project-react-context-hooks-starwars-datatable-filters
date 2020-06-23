import React, { useEffect, useContext } from 'react';

import { dataPlanetsContext } from '../context/DataPlanets';
import fetchSWAPI from '../services/fetchSWAPI';
import './FetchData.css';

function FetchData() {
  const [
    { isFetching },
    { setIsFetching, setError, setHeaders, setData }
  ] = useContext(dataPlanetsContext);

  useEffect(() => {
    if (isFetching) fetchSWAPI()
      .then(({ results }) => {
        setData([...results]);
        setHeaders([...Object.keys(results[0]).filter((key) => key !== 'residents')]);
        setIsFetching(false);
      }).catch((error) => setError(error));
  }, [isFetching]);

  if (isFetching) return <div className="loading">Loading...</div>;
  return null;
}

export default FetchData;
