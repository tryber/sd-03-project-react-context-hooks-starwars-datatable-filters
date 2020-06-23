import React from 'react';
import TableData from './components/TableData';
import ProviderData from './context/Provider';

function App() {
  return (
    <ProviderData>
      <div className="App">
        <TableData />
      </div>
    </ProviderData>
  );
}

export default App;
