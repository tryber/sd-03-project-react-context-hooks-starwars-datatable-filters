import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = () => (
  <div className="table-container is-hoverable is-fullwidth">
    <table className="table">
      <TableHeader />
      <TableBody />
    </table>
  </div>
);

export default Table;
