import React, { useContext, useState } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import {
//   filterName, filterNumValues, deleteFilter, disableColumn, enableColumn, changeOrder
// } from '../actions';
import { FiltersContext } from '../context/FiltersContext';

const Filters = () => {
  const {
    filters,
    setFilterByName,
    setFilterByNumber,
    setCol,
    deleteFil,
    changeOrd,
  } = useContext(FiltersContext);

  const [state, setState] = useState({
    column: '',
    comparison: '',
    value: '',
    filters: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
    orderColumn: 'name',
    orderSort: 'ASC',
  });

  const selectAnOption = () => {
    const { column } = state;
    const { avaliableFilters } = filters;
    return (
      <select
        data-testid="column-filter"
        value={column}
        onChange={(event) => setState({ ...state, column: event.target.value })}
      >
        <option value="" />
        {avaliableFilters.reduce((acc, filter) => {
          if (filter.avaliable) {
            acc.push(<option value={filter.name} key={filter.name}>{filter.name}</option>);
          }
          return acc;
        }, [])}
      </select>
    );
  };

  const selectACondition = () => {
    const { comparison } = state;
    return (
      <select
        data-testid="comparison-filter"
        value={comparison}
        onChange={(event) => setState({ ...state, comparison: event.target.value })}
      >
        <option value="" />
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    );
  };

  const inputNumber = () => {
    return (
      <input
        data-testid="value-filter"
        type="number"
        placeholder="Digit a number"
        onChange={(event) => setState({ ...state, value: event.target.value })}
      />
    );
  };

  const disableOption = (column) => {
    const { avaliableFilters } = filters;
    const response = avaliableFilters;

    response[response.findIndex((filter) => filter.name === column)].avaliable = false;
    setCol(response);
  };

  const filterBtn = () => {
    const { column, comparison, value } = state;
    return (
      <button
        data-testid="button-filter" type="button"
        onClick={() => {
          setFilterByNumber({ column, comparison, value });
          disableOption(column);
        }}
      >
        Filtrar
      </button>
    );
  };

  const enableOption = (column, index) => {
    const { filterByNumericValues, avaliableFilters } = filters;
    const response = avaliableFilters;

    response[response.findIndex((filter) => filter.name === column)].avaliable = true;
    setCol(response);

    const response2 = filterByNumericValues;
    response2.splice(index, 1);
    deleteFil(response2);
  };

  const selectOrder = () => {
    return (
      <div>
        <select
          data-testid="column-sort" id="orderColumn"
          onChange={(event) => setState({ ...state, orderColumn: event.target.value })}
        >
          <option>name</option>
          <option>climate</option>
          <option>created</option>
          <option>diameter</option>
          <option>edited</option>
          <option>films</option>
          <option>gravity</option>
          <option>orbital_period</option>
          <option>population</option>
          <option>rotation_period</option>
          <option>surface_water</option>
          <option>terrain</option>
          <option>url</option>
        </select>
      </div>
    );
  };

  const getOrdered = () => {
    const { orderColumn, orderSort } = state;
    return (
      <div>
        <p>Select order:</p>
        {selectOrder()}
        <p>Asc</p>
        <input
          data-testid="column-sort-input"
          type="radio" name="order" value="ASC"
          onClick={(event) => setState({ ...state, orderSort: event.target.value })}
        />
        <p>Desc</p>
        <input
          data-testid="column-sort-input"
          type="radio" name="order" value="DESC"
          onClick={(event) => setState({ ...state, orderSort: event.target.value })}
        />
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => changeOrd({ ...state, column: orderColumn, sort: orderSort })}
        >
          Order
        </button>
      </div>
    );
  };

  const { filterByNumericValues } = filters;

  return (
    <div>
      <h3>Filter results</h3>
      <input
        data-testid="name-filter" type="text" placeholder="Digit a planet name"
        value={filters.filterByName.name}
        onChange={(event) => setFilterByName(event.target.value)}
      />
      <p>Select an option:</p>
      {selectAnOption()}
      <p>Select a condition:</p>
      {selectACondition()}
      {inputNumber()}
      {filterBtn()}
      {console.log(filterByNumericValues)}
      {filterByNumericValues.map((filter, index) => (
        <div data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button type="button" onClick={() => enableOption(filter.column, index)} >
            X
          </button>
        </div>
      ))}
      {getOrdered()}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   filterByNumeric: state.filters.filterByNumericValues,
//   avaliableFilters: state.filters.avaliableFilters,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getFilterByName: (name) => dispatch(filterName(name)),
//   getFilterByNumber: (getFilterByNumber) => dispatch(filterNumValues(getFilterByNumber)),
//   deleteFil: (filters) => dispatch(deleteFilter(filters)),
//   disableCol: (column) => dispatch(disableColumn(column)),
//   enableCol: (column) => dispatch(enableColumn(column)),
//   changeOrd: (order) => dispatch(changeOrder(order)),
// });

// Filters.propTypes = {
//   getFilterByName: PropTypes.func.isRequired,
//   getFilterByNumber: PropTypes.func.isRequired,
//   filterByNumeric: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.string,
//     }),
//   ).isRequired,
//   avaliableFilters: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string,
//       avaliableFilters: PropTypes.bool,
//     }),
//   ).isRequired,
//   deleteFil: PropTypes.func.isRequired,
//   disableCol: PropTypes.func.isRequired,
//   enableCol: PropTypes.func.isRequired,
//   changeOrd: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Filters);
export default Filters;
