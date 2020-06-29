import React, { useEffect, useContext } from 'react';
import Filters from './Filters';
import Table from './Table';
import StarWarsContext from '../context/StarWarsContext';

function Home() {
  const { requestFetch, isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    requestFetch();
  }, []);

  if (isFetching) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <Filters />
      <Table />
    </div>
  );
}

export default Home;
