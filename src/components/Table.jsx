import React, { useContext } from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { numericColumn, frendlyUser } from '../services/constants';

import { dataPlanetsContext } from '../context/DataPlanets';
import { filtersContext } from '../context/Filters';
import { formatContext } from '../context/Format';
import './Table.css';

const filterByNumProperties = (list, { value, column, comparison }) => {
  const numValue = Number(value);
  switch (comparison) {
    case 'maior que': return list.filter((obj) => Number(obj[column]) > numValue);
    case 'menor que': return list.filter((obj) => Number(obj[column]) < numValue);
    case 'igual a': return list.filter((obj) => Number(obj[column]) === numValue);
    default: return list;
  }
};

const orderByStringProperties = (list, col, direction) => {
  const sortedList = numericColumn
    .some((option) => option === col) ? list.sort((A, B) => A[col] - B[col])
    : list.sort((A, B) => A[col].localeCompare(B[col]));

  if (direction === 'DESC') sortedList.reverse();
  return sortedList;
};

const makeHeadersInMultiHeadersTable = (headers) => {
  const extraStyle = (`
    td:before {
      left: 6px;padding-right: 10px;position: absolute;top: 6px;white-space: nowrap;width: 45%;
    }`);

  const nthOfTypeBefore = (order, title) => (`
  td:nth-of-type(${order}):before {
    content: "${title}";
  }`);

  return (
    <style>
      {extraStyle + headers.reduce((string, prop, index) => (
        string.concat(nthOfTypeBefore(index + 1, frendlyUser(prop)))
      ), '')}
    </style>
  );
};

function Table() {
  const [{ data: planets, headers }] = useContext(dataPlanetsContext);
  const [{
    filterByName: { name: searchText },
    filterByNumericValues: numFilters,
    order: { column, sort },
  }] = useContext(filtersContext);
  const [isMultiHeader] = useContext(formatContext);

  if (planets.length === 0) return <div>None Planet Found</div>;

  let planetsToShow = planets.filter((planet) => planet.name.includes(searchText));
  planetsToShow = orderByStringProperties(planetsToShow, column.toLowerCase(), sort);
  numFilters.forEach((filter) => {
    planetsToShow = filterByNumProperties(planetsToShow, filter);
  });

  return (
    <React.Fragment>
      {isMultiHeader && makeHeadersInMultiHeadersTable(headers)}
      <table className={isMultiHeader ? 'table-multi-headers' : ''}>
        <caption>Planets</caption>
        <TableHeader headers={headers} isMultiHeader={isMultiHeader} />
        <TableBody items={planetsToShow} properties={headers} isMultiHeader={isMultiHeader} />
      </table>
    </React.Fragment>
  );
}

export default Table;
