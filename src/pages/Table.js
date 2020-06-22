import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import DataTable from './components/DataTable';
import Filters from '../components/FiltersTable';

const Table = () => {

  const { loading, data, error, fetchPlanets } = useContext(StarWarsContext)

  useEffect(() => {
    fetchPlanets()
  }, [])

  if (!loading && data.length !== 0) {
    return (
      <div>
        <h1>StarWars Datatable with Filters:</h1>
        <Filters />
        <DataTable />
      </div>
    );
  }
  if (error) { return <div>{error}</div>; }
  return <div>Loading...</div>;

}

Table.defaultProps = {
  data: [],
  error: '',
};

export default Table;
