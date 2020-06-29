import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
import RenderFilterByName from './components/RenderFilterByName';
import RenderNumericFilters from './components/RenderNumericFilters';
import TableRender from './components/RenderTable';

const App = () => (
  <div className="App">
    <StarWarsProvider>
      <RenderFilterByName />
      <RenderNumericFilters />
      <TableRender />
    </StarWarsProvider>
  </div>
);

export default App;
