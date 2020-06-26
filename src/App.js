import React from 'react';
import Table from './components/Table';
import AllFiltersArrProvider from './provider/AllFiltersArrProvider';
import FiltersProvider from './provider/FiltersProvider';
import SWApiProvider from './provider/SWApiProvider';


const App = () => (
  <AllFiltersArrProvider>
    <FiltersProvider>
      <SWApiProvider>
        <Table />
      </SWApiProvider>
    </FiltersProvider>
  </AllFiltersArrProvider>
);

export default App;
