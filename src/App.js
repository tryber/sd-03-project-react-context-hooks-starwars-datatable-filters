import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
import TableRender from './components/RenderTable'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <StarWarsProvider>
        <TableRender />
      </StarWarsProvider>
    </div>
  );
};

export default App;
