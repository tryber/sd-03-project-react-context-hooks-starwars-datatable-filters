import React from 'react';
import { SWProvider } from './Context/StarWarsContext';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <SWProvider>
      <Home />
    </SWProvider>
  );
}

export default App;
