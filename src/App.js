import React, { useContext, useEffect } from 'react';
import Table from './components/Table';
import FilterContainer from './components/filters/FilterContainer';
import { StarWarsContext } from './context/StarWarsContext';
import './App.css';

function App() {
  const { isFetching, data, fetchPlanets, filterByText, textFilter } = useContext(StarWarsContext);

  const filterDataByText = (dataSent) => {
    if (textFilter.filterByName.name !== '') {
      return dataSent.filter(({ name }) =>
      name.toLowerCase().includes(textFilter.filterByName.name.toLowerCase()));
    }
    return data;
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className="App">
      <div>
        <FilterContainer onChange={(event) => filterByText(event.target.value)} />
      </div>
      {isFetching ? (
        <h1>Loading..</h1>
      ) : (
        <Table data={filterDataByText(data)} />
      )}
    </div>
  );
}

export default App;
