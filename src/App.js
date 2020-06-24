import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Filter from './components/Filter';
import NumericFilter from './components/NumericFilter';
import ListFilters from './components/ListFilters';
import OrderTable from './components/OrderTable';
import './App.css';

const App = () =>
  <Provider>
    <div className="App">
      <span>StarWars Datatable with Filters</span>
      <Filter />
      <NumericFilter />
      <ListFilters />
      <OrderTable />
      <Table />
    </div>
  </Provider>;

export default App;
