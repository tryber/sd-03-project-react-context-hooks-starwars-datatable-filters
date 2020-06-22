import React from 'react';
import { Provider } from './context/StarWarsProvider';
import Table from './pages/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
