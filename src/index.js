import React from 'react';
import ReactDOM from 'react-dom';
import { TableProvider as Provider } from './context/Index';
import Table from './components/table/table';

ReactDOM.render(
  <Provider >
    <div className="App">
      <Table />
    </div>
  </Provider>,
  document.getElementById('root'),
);
