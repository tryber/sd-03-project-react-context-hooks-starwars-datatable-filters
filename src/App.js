import React from 'react';
import Table from './components/Table';
import ProviderData from './context/ProviderData';
import ProviderFilters from './context/ProviderFilters';
import Filters from './components/Filters';

function App() {
  return (
    <ProviderData>
        <Filters />
        <Table />
    </ProviderData>
  );
}

export default App;
