import React from 'react';

import Table from './Components/Table/Table';

import './App.css';
import Provider from './Components/Context/APIProvider';

function App() {
  return (
    <Provider>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
