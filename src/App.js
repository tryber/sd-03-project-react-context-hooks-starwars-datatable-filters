import React from 'react';
import { Provider } from './context/StarWarsContext';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
