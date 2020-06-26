import React, { useContext } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import FiltersContext from '../context/FiltersContext';
import SWApiContext from '../context/SWApiContext';
import Header from './Header';
import TableHeaders from './TableHeaders';
import Inputs from './Inputs';
import SelectedFilters from './SelectedFilters';
import TableData from './TableData';
// import { filterByNameAction } from '../actions/filterByNameAction';
// import { filterByNumericValuesAction } from '../actions/filterByNumericValuesAction';

const greaterThan = (column, value, obj) => {
  if (!(Number(obj[column]) > Number(value))) return false;
  return true;
};

const lessThan = (column, value, obj) => {
  if (!(Number(obj[column]) < Number(value))) return false;
  return true;
};

const equal = (column, value, obj) => {
  if (!(Number(obj[column]) === Number(value))) return false;
  return true;
};

const GreaterLessEqual = (operator, column, value, obj) => {
  switch (operator) {
    case 'maior que':
      return greaterThan(column, value, obj);
    case 'menor que':
      return lessThan(column, value, obj);
    case 'igual a':
      return equal(column, value, obj);
    default:
      return true;
  }
};

const helperFunction = (obj, filterByNumericValues, name) => {
  if (!obj.name.toLowerCase().includes(name.toLowerCase()) && name !== '') return false;
  for (let i = 0; i < filterByNumericValues.length; i += 1) {
    const { column, numericValue, comparison } = filterByNumericValues[i];
    if (!GreaterLessEqual(comparison, column, numericValue, obj)) return false;
  }
  return true;
};

const dataFilterFunction = (data, filterByNumericValues, name) => {
  const newArrToFilter = [...data];
  if (name !== '' || filterByNumericValues.length > 0) {
    return newArrToFilter.reduce((acc, planetObj) => {
      if (helperFunction(planetObj, filterByNumericValues, name)) acc.push(planetObj);
      return acc;
    }, []);
  }
  return data;
};

const sortDescColName = (columnLowerCase, data, filterByNumericValues, name) => {
  const dataFiltered = dataFilterFunction(data, filterByNumericValues, name);
  return dataFiltered.sort((a, b) => {
    if (a[columnLowerCase] < b[columnLowerCase]) return 1;
    if (a[columnLowerCase] > b[columnLowerCase]) return -1;
    return 0;
  });
};

const sortDescCol = (data, filterByNumericValues, order, name) => {
  const { column } = order;
  const columnLowerCase = column.toLowerCase();
  const dataFiltered = dataFilterFunction(data, filterByNumericValues, name);
  // console.log(dataFiltered);
  if (columnLowerCase === 'name') {
    return sortDescColName(columnLowerCase, data, filterByNumericValues, name);
  }
  return dataFiltered.sort(function (a, b) {
    if (Number(a[columnLowerCase]) < Number(b[columnLowerCase])) return 1;
    if (Number(a[columnLowerCase]) > Number(b[columnLowerCase])) return -1;
    return 0;
  });
};

const sortAscColWithoutName = (columnLowerCase, data, filterByNumericValues, name) => {
  const dataFiltered = dataFilterFunction(data, filterByNumericValues, name);
  return dataFiltered.sort(function (a, b) {
    if (Number(a[columnLowerCase]) > Number(b[columnLowerCase])) return 1;
    if (Number(a[columnLowerCase]) < Number(b[columnLowerCase])) return -1;
    return 0;
  });
};

const sortAscCol = (data, filterByNumericValues, order, name) => {
  const { column } = order;
  const columnLowerCase = column.toLowerCase();
  const dataFiltered = dataFilterFunction(data, filterByNumericValues, name);
  if (columnLowerCase === 'name') {
    return dataFiltered.sort(function (a, b) {
      if (a[columnLowerCase] > b[columnLowerCase]) return 1;
      if (a[columnLowerCase] < b[columnLowerCase]) return -1;
      return 0;
    });
  }
  return sortAscColWithoutName(columnLowerCase, data, filterByNumericValues, name);
};

const dataSortFunction = (data, filterByNumericValues, order, name) => {
  const { sort } = order;
  if (sort === 'DESC') return sortDescCol(data, filterByNumericValues, order, name);
  return sortAscCol(data, filterByNumericValues, order, name);
};

const Table = () => {
  const { filters } = useContext(FiltersContext);
  const { filterByName: { name }, filterByNumericValues, order } = filters;

  const { data } = useContext(SWApiContext);

  return (
    <div>
      <Header />
      <Inputs />
      <SelectedFilters />
      <table>
        <TableHeaders />
        <TableData dataSw={dataSortFunction(data, filterByNumericValues, order, name)} />
      </table>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   filterByName: (text) => dispatch(filterByNameAction(text)),
//   filterByNumericValues: (obj) => dispatch(filterByNumericValuesAction(obj)),
// });

// const mapStateToProps = (state) => ({
//   dataSw: state.apiSWReducer.data,
//   isLoading: state.apiSWReducer.loading,
//   typedText: state.filters.filterByName.name,
//   numericSearched: state.filters.filterByNumericValues,
//   sortCol: state.filters.order,
// });

export default Table;

// Table.propTypes = {
//   typedText: PropTypes.string,
//   dataSw: PropTypes.arrayOf(PropTypes.object),
//   numericSearched: PropTypes.arrayOf(PropTypes.object),
//   sortCol: PropTypes.objectOf(PropTypes.any),
// };

// Table.defaultProps = {
//   typedText: '',
//   dataSw: [],
//   numericSearched: {},
//   sortCol: {},
// };
