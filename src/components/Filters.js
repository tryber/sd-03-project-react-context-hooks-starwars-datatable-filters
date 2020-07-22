import React, { useContext, useState } from 'react';
import { FiltersContext } from '../context/FiltersContext';

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const selectAnOption = (state, setState, filters) => {
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
      }, columns)}
    </select>
  );
};

const selectACondition = (state, setState) => {
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

const inputNumber = (state, setState) =>
  <input
    data-testid="value-filter"
    type="number"
    placeholder="Digit a number"
    onChange={(event) => setState({ ...state, value: event.target.value })}
  />;

const disableOption = (column, filters, setCol) => {
  const { avaliableFilters } = filters;
  const response = avaliableFilters;

  response[response.findIndex((filter) => filter.name === column)].avaliable = false;
  setCol(response);
};

const filterBtn = (state, setFilterByNumber, filters, setCol) => {
  const { column, comparison, value } = state;
  return (
    <button
      data-testid="button-filter" type="button"
      onClick={() => {
        setFilterByNumber({ column, comparison, value });
        disableOption(column, filters, setCol);
      }}
    >
      Filtrar
    </button>
  );
};

const enableOption = (column, index, filters, setCol, deleteFil) => {
  const { filterByNumericValues, avaliableFilters } = filters;
  const response = avaliableFilters;

  response[response.findIndex((filter) => filter.name === column)].avaliable = true;
  setCol(response);

  const response2 = filterByNumericValues;
  response2.splice(index, 1);
  deleteFil(response2);
};

const selectOrder = (state, setState) =>
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
  </div>;

const getOrdered = (state, setState, changeOrd) => {
  const { orderColumn, orderSort } = state;
  return (
    <div>
      <p>Select order:</p>
      {selectOrder(state, setState)}
      <p>Asc</p>
      <input
        data-testid="column-sort-input-asc"
        type="radio" name="order" value="ASC"
        onClick={(event) => setState({ ...state, orderSort: event.target.value })}
      />
      <p>Desc</p>
      <input
        data-testid="column-sort-input-desc"
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
      {selectAnOption(state, setState, filters)}
      <p>Select a condition:</p>
      {selectACondition(state, setState)}
      {inputNumber(state, setState)}
      {filterBtn(state, setFilterByNumber, filters, setCol)}
      {filterByNumericValues.map((filter, index) => (
        <div data-testid="filter">
          {`${filter.column} ${filter.comparison} ${filter.value}`}
          <button
            type="button"
            onClick={() => enableOption(filter.column, index, filters, setCol, deleteFil)}
          >
            X
          </button>
        </div>
      ))}
      {getOrdered(state, setState, changeOrd)}
    </div>
  );
};

export default Filters;
