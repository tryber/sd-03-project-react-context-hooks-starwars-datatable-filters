import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
import RenderFilters from './components/RenderFilters';
import TableRender from './components/RenderTable';

const App = () => (
  <div className="App">
    <StarWarsProvider>
      <RenderFilters />
      <TableRender />
    </StarWarsProvider>
  </div>
);

export default App;
