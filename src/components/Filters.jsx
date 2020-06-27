// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import filterByName from '../actions/filterByName';
// import filterByNumericValue from '../actions/filterByNumericValue';
// import Option from './Option';
// import disable from '../actions/disable';
// import enable from '../actions/enable';
// import removeFilter from '../actions/removeFilter';
// import orderChange from '../actions/orderChange';
import FilterName from './FilterName';
import FilterValues from './FilterValues';
import FilterOrder from './FilterOrder';
import RemoveFilter from './RemoveFilter';
// import StarWarsContext from '../context/StarWarsContext';
// import updateColumn from './updateColumn';
// import { getRadios, getColumns, getComparation } from './getSelects';


function Filters() {
  return (
    <div>
      <FilterName />
      <FilterValues />
      <FilterOrder />
      <RemoveFilter />
    </div>
  );
}

export default Filters;
