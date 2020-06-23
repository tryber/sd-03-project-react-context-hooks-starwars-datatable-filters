import React from 'react';
import Table from './components/Table';
import Filters from './components/Filters';
import { TableData } from './components/TableData';
import './App.css';

function App() {
  return (
    <TableData>
      <Filters>
        <Table />
      </Filters>
    </TableData>
  );
}

export default App;
