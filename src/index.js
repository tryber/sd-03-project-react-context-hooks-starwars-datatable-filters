import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import starWarsContext from './context/starWarsContext';
import StarWarsProvider from './context/starWarsContext';

ReactDOM.render(
  <StarWarsProvider>
    <App />
  </StarWarsProvider>,
  document.getElementById('root')
);
