import React, { useEffect, useContext } from 'react';
import Table from './Table';
import Input from './Input';
import { StarContext } from './Context';
import RemoveFilter from './RemoveFilter';

function Home() {
  const { requestFetch, isFetching } = useContext(StarContext);
  useEffect(() => {
    requestFetch();
  }, []);

  if (isFetching) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <Input />
      <RemoveFilter />
      <Table />
    </div>
  );
}

export default Home;