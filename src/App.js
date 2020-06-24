import React from 'react';
import { SWProvider } from './context/StarWarsContext';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <SWProvider>
      <Home />
    </SWProvider>
  );
}

export default App;
