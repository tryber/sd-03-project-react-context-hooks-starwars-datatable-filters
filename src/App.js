import React from 'react';
import Table from './components/Table';
import ProviderData from './context/toData/ProviderData';
import ProviderFilters from './context/toFilter/ProviderFilters';
import Filters from './components/Filters';


function App() {
  return (
    <ProviderData>
      <ProviderFilters>
        <Filters />
        <Table />
      </ProviderFilters>
    </ProviderData>
  );
}

export default App;
