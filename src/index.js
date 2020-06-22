import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import StarWarsProvider from './context/starWarsContext';

ReactDOM.render(
  <StarWarsProvider>
    <App />
  </StarWarsProvider>,
  document.getElementById('root')
);
