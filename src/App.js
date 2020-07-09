import React from 'react';
import Inicio from './pages/Inicio';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Inicio />
    </StarWarsProvider>
  );
}

export default App;
