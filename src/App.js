import React from 'react';
import Table from './components/Table'
import Filters from './components/Filters'
import { TableData } from './components/tableData'
import './App.css';

function App() {
  return (
    <TableData>
      <Filters >
        <Table />
      </Filters>
    </TableData>
  );
}

export default App;
