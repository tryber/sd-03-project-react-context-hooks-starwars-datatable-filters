import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Filter from './components/Filter';
import NumericFilter from './components/NumericFilter';
import ListFilters from './components/ListFilters';
import './App.css';

const App = () =>
  <Provider>
    <div className="App">
      <span>StarWars Datatable with Filters</span>
      <Filter />
      <NumericFilter />
      <ListFilters />
      <Table />
    </div>
  </Provider>;

export default App;
