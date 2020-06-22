import React, { useContext } from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import * as constants from '../services/constants';

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
  const sortedList = (constants.numColumn.some((option) => option === col))
    ? list.sort((elemA, elemB) => elemA[col] - elemB[col])
    : list.sort((elemA, elemB) => elemA[col].localeCompare(elemB[col]));

  if (direction === 'DESC') sortedList.reverse();
  return sortedList;
};

const renderBody = (planets, properties, isMultiHeader) => (
  <tbody
    style={isMultiHeader ? { border: '1px solid #ccc' } : { display: 'block', flexBasis: '60%' }}
  >
    {planets
      .map((planet, index) => (
        <TableRow
          key={planet.name}
          planet={planet}
          properties={properties}
          isMultiHeader={isMultiHeader}
          index={index}
        />
      ))
    }
  </tbody>
);

const generateStyle = (isMultiHeader) => (
  isMultiHeader ? { display: 'inline-block' } : ({
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '60%',
  })
);

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
          string.concat(nthOfTypeBefore(index + 1, constants.frendlyUser(prop)))
      ), '')}
    </style>
  );
};

function Table() {
  const { state: { data: planets, headers } } = useContext(dataPlanetsContext);
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
      <table
        className="table"
        style={generateStyle(isMultiHeader)}
      >
        <caption>Star Wars Planets</caption>
        <TableHeader
          headers={headers}
          isMultiHeader={isMultiHeader}
        />
        {renderBody(planetsToShow, headers, isMultiHeader)}
      </table>
    </React.Fragment>
  );
}

export default Table;
