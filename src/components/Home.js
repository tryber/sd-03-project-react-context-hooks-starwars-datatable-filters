import React, { useEffect, useContext } from 'react';
import InputText from './InputText';
import ByNumericValues from './ByNumericValues';
import FilterOrder from './FilterOrder';
import RemoveFilter from './RemoveFilter';
import Table from './Table/Table';
import StarWarsContext from '../context/StarWarsContext';

function Home() {
  const { requestAPI, isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    requestAPI();
  }, []);

  if (isFetching) return <p>Loading...</p>;

  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <InputText />
      <ByNumericValues />
      <FilterOrder />
      <RemoveFilter />
      <Table />
    </div>
  );
}

export default Home;
