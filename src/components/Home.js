import React, { useContext, useEffect } from 'react';
import Table from './Table';
import Filters from './Filters';
import StarWarsContext from '../context/StarWarsContext';
import SelectedFilters from './SelectedFilters';


const Home = () => {
  const { filteredData, isFetching, fetchData } = useContext(StarWarsContext);
  useEffect(() => {
    fetchData();
  }, []);

  return (filteredData.length > 0 && !isFetching
    ? (
      <div className="App">
        <Filters />
        <SelectedFilters />
        <Table />
      </div>
    )
    : <h1>Sem planetas encontrados</h1>);
};

export default Home;
