import React from 'react';
import Tbody from './Tbody';
import Thead from './Thead';

const Table = ({ data }) => (
  <div>
    <h1>Star Wars Datatable With Hooks</h1>
    <table>
      <Thead />
      <Tbody data={data} />
    </table>
  </div>
);

export default Table;
