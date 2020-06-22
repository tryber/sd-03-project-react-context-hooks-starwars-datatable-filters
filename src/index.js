import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import DataPlanetsProvider from './context/DataPlanets';
import FiltersProvider from './context/Filters';

import './index.css';

import * as serviceWorker from './serviceWorker';
import FormatProvider from './context/Format';

ReactDOM.render(
  <DataPlanetsProvider>
    <FiltersProvider>
      <FormatProvider>
        <App />
      </FormatProvider>
    </FiltersProvider>
  </DataPlanetsProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
