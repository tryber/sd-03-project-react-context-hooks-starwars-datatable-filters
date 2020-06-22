import React from 'react';
import PropTypes from 'prop-types';
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

Table.propTypes = { data: PropTypes.arrayOf(PropTypes.object).isRequired };

export default Table;
