import React from 'react';

import Table from './components/Table';
import Filters from './components/Filters';

import { Provider } from './context/StarWarsContext';

function App() {
  return (
    <div>
      <Provider>
        <Filters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
