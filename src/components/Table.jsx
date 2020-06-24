import React, { useContext } from 'react';
import { DataContext } from './TableData';
import { FilterContext } from './Filters';

const header = ['name', 'population', 'climate', 'diameter', 'created', 'gravity', 'orbital_period', 'rotation_period',
  'surface_water', 'terrain', 'films', 'edited', 'url'];

function doCompare(e, el) {
  switch (el.comparison) {
    case 'maior que': return parseInt(e[el.column], 10) > parseInt(el.value, 10);
    case 'menor que': return parseInt(e[el.column], 10) < parseInt(el.value, 10);
    case 'igual a': return parseInt(e[el.column], 10) === parseInt(el.value, 10);
    default: return [];
  }
}

function renderTableheaders() {
  return (
    <thead>
      <tr>
        {header.map((e) => <th>{e}</th>)}
      </tr>
    </thead>
  );
}

function sortColumns(data, order) {
  if (order.sort === 'ASC') { data.sort(function (a, b) { return Number(a[order.column]) - Number(b[order.column]); }); }
  if (order.sort === 'DESC') { data.sort(function (a, b) { return Number(b[order.column]) - Number(a[order.column]); }); }
}

function filterData(filterByNumericValues, data) {
  if (filterByNumericValues) {
    const filteredData = filterByNumericValues
      .reduce((acc, el) => acc.filter((e) => doCompare(e, el)), data);
    if (filteredData) return filteredData;
    return [];
  }
  return [];
}

function renderTableData(nameFilter, filterByNumericValues, data) {
  return (
    !nameFilter && (filterByNumericValues.length === 0) && data.map((e) => (
      <tr key={e.name}>
        {header.map((el) => {
          if (el === 'name') return <td data-testid="planet-name" key={e.name + el}>{e[el]}</td>;
          return <td key={e.name + el}>{e[el]}</td>;
        })}
      </tr>
    ))
  );
}

function renderFilteredDataByName(nameFilter, data) {
  return (
    nameFilter && data.filter((e) => e.name.toLowerCase()
      .includes(nameFilter.toLowerCase())).map((e) => (
        <tr key={e.name}>
          {header.map((el) => {
            if (el === 'name') return <td data-testid="planet-name" key={e.name + el}>{e[el]}</td>;
            return <td key={e.name + el}>{e[el]}</td>;
          })}
        </tr>
    ))
  );
}

function renderFilteredDataByNumeric(filterByNumericValues, data) {
  return (
    filterByNumericValues.length > 0 && filterData(filterByNumericValues, data).map((e) => (
      <tr key={e.name}>
        {header.map((el) => {
          if (el === 'name') return <td data-testid="planet-name" key={e.name + el}>{e[el]}</td>;
          return <td key={e.name + el}>{e[el]}</td>;
        })}
      </tr>
    ))
  );
}

export default function Table() {
  const { data } = useContext(DataContext);
  const { nameFilter, filterByNumericValues, order } = useContext(FilterContext);

  sortColumns(data, order);

  return (
    <div>
      <table>
        {renderTableheaders()}
        <tbody>
          {renderTableData(nameFilter, filterByNumericValues, data)}
          {renderFilteredDataByName(nameFilter, data)}
          {renderFilteredDataByNumeric(filterByNumericValues, data)}
        </tbody>
      </table>
    </div>
  );
}
