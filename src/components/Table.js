import React, {
  useContext,
  useEffect,
} from 'react';
import StarWarsContext from '../context/StarWarsContext';
import DataTable from './DataTable';
import Filters from './Filters';

function Table() {
  const {
    stateFetch,
    fetchPlanets,
  } = useContext(StarWarsContext);
  const {
    loading,
    error,
    data,
  } = stateFetch;

  useEffect(() => {
    fetchPlanets();
  }, []);

  if (!loading && data.length !== 0) {
    return (
      <div>
        <h1>
          StarWars Datatable with
          Filters:
        </h1>
        <Filters />
        <DataTable />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return <div>Loading...</div>;
}

export default Table;
