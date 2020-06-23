import React from 'react';
import ReactDOM from 'react-dom';
import SWApiProvider from './provider/SWApiProvider';
import FiltersProvider from './provider/FiltersProvider';
import AllFiltersArrContext from './provider/AllFiltersArrProvider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AllFiltersArrContext>
    <FiltersProvider>
      <SWApiProvider>
        <App />
      </SWApiProvider>
    </FiltersProvider>
  </AllFiltersArrContext>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
