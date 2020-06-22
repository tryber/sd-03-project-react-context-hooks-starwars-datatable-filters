import React, { useContext } from 'react';
import Table from './Table';
import Filters from './Filters';
import StarWarsContext from '../context/StarWarsContext';

const Home = () => {
  const { filteredData, isFetching } = useContext(StarWarsContext);
  return (!isFetching && !filteredData.length
    ? (
      <div className="App">
        <Filters />
        <Table />
      </div>
    )
    : <h1>Sem planetas encontrados</h1>);
};

export default Home;
