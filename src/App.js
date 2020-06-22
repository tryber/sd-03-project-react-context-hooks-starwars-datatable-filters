import React, { useContext } from 'react';

import Table from './components/Table';
import FetchData from './components/FetchData';
import FiltersBar from './components/FiltersBar';

import { dataPlanetsContext } from './context/DataPlanets';
// import './App.css';

const App = () => {
  const { state: { isFetching } } = useContext(dataPlanetsContext);

  if (isFetching) return <FetchData />;
  return (
    <div className="App">
      <FiltersBar />
      <Table />
    </div>
  );
};

export default App;
