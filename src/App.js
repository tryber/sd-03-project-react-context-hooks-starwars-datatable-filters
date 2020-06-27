import React from 'react';
import './App.css';
import Fix from './Fix';
import MyProvider from './context/context';

const App = () => (
  <MyProvider>
    <Fix />
  </MyProvider>
)

export default App;
