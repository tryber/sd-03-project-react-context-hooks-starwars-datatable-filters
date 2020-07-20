import React from 'react';
import './App.css';

import Table from './components/Table';
import StarwarsProvider from './context/StarWarsContext';
import FiltersProvider from './context/FiltersContext';

function App() {
  return (
    <StarwarsProvider>
      <FiltersProvider>
        <Table />
      </FiltersProvider>
    </StarwarsProvider>
  );
}

export default App;
