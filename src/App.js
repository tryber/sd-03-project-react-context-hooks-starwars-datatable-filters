import React from 'react';
import Home from './components/Home';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <Home />
      </div>
    </StarWarsProvider>
  );
}

export default App;
