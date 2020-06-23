import React from 'react';

import DataPlanetsProvider from './context/DataPlanets';
import FiltersProvider from './context/Filters';
import FormatProvider from './context/Format';

import { FetchData, Table, FiltersBar } from './components/';

import './App.css';

const App = () => (
  <div className="App">
    <DataPlanetsProvider>
      <FetchData />
      <FiltersProvider>
        <FormatProvider>
          <FiltersBar />
          <Table />
        </FormatProvider>
      </FiltersProvider>
    </DataPlanetsProvider>,
  </div>
);

export default App;
