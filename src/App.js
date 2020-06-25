import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
