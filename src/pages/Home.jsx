import React, { useContext, useEffect } from 'react';
import PlanetTableContext from '../context/context';
import Table from '../components/table/Table';
import FilterContainer from '../components/filters/FilterContainer';

const Home = () => {
  const {
    error, setData, loading, setLoading, getPlanetsInfo,
  } = useContext(
    PlanetTableContext,
  );

  useEffect(() => {
    getPlanetsInfo();
    return () => {
      setLoading(false);
      setData([]);
    };
  }, []);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h3>{error}</h3>}
      {!loading && (
        <div>
          <div><FilterContainer /></div>
          <Table />
        </div>
      )}
    </>
  );
};

export default Home;
