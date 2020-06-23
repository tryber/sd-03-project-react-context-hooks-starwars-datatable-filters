import React, { useEffect } from 'react';
import Table from './components/Table';
import ProviderData from './context/ProviderData';
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
