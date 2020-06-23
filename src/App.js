import React from 'react';
import Provider from './context/provider';
import Home from './pages/Home';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Provider>
    <div className="App">
      <Header />
      <Home />
    </div>
  </Provider>
);

export default App;
