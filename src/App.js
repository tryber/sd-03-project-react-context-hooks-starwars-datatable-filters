import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import NumericFilter from './components/NumericFilter';
import ListFilters from './components/ListFilters';
import './App.css';

const App = () => 
  <div className="App">
    <span>StarWars Datatable with Filters</span>
    <Filter />
    <NumericFilter />
    <ListFilters />
    <Table />
  </div>;

export default App;
