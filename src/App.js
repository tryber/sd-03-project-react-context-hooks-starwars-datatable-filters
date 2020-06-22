import React from 'react';
import { SWProvider } from './context/StarWarsContext';
import './App.css';
import Table from './components/Table';


function App() {
  return (
    <SWProvider>
      <div className="App">
        <Table />
      </div>
    </SWProvider>
  );
}

export default App;
