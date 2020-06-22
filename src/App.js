import React from 'react';

import Table from './components/Table';

import { Provider } from './context/StarWarsContext';

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
