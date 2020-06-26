import React, { useEffect, useContext } from 'react';
import Table from '../components/Table';
import FilterContainer from '../components/filters/FilterContainer';
import { StarWarsContext } from '../context/StarWarsContext';

function Home() {
  const { isFetching, fetchPlanets } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className="Home">
      <div>
        <FilterContainer />
      </div>
      {isFetching ? (
        <h1>Loading..</h1>
      ) : (
        <Table />
      )}
    </div>
  );
}

export default Home;
