import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LineTable from './LineTable';
import StarWarsContext from '../context/StarWarsContext';


import TableHead from './TableHead';
import TableBody from './TableBody';

function Table() {
  return (
    <div>
      <table>
        <TableHead />
        <TableBody />
      </table>
    </div >
  );
}

export default Table;
