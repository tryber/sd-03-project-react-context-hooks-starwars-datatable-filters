import React from 'react';
import { StarWarsProvider } from './context/StarWarsContext';
import RenderFilterByName from './components/RenderFilterByName';
import TableRender from './components/RenderTable';

const App = () => (
  <div className="App">
    <StarWarsProvider>
      <RenderFilterByName />
      <TableRender />
    </StarWarsProvider>
  </div>
);

export default App;
