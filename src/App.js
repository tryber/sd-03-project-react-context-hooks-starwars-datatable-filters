import React from 'react';
import { SWProvider } from './context/StarWarsContext';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';


function App() {
  return (
    <SWProvider>
      <div className="App">
        <Filters />
        <Table />
      </div>
    </SWProvider>
  );
}

export default App;
