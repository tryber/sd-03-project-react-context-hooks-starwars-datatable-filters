import React, { useContext, useEffect } from 'react';
import PlanetTableContext from '../context/context';
import getAllPlanetsFromAPI from '../services/starWarsAPI';

const FetchData = () => {
  const { setData, loading, setLoading } = useContext(PlanetTableContext);

  useEffect(() => {
    if (loading) return;
    setData(getAllPlanetsFromAPI());
    setLoading(false);
    return () => {
      setLoading(false);
    };
  }, []);

  return <div>Loading...</div>;
};

export default FetchData;
