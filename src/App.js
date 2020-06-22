import React from 'react';
import './App.css';
import Table from './componets/Table';
import StarWarsProvider from './context/starWarsContext';


function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <h1>Star Wars</h1>
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
