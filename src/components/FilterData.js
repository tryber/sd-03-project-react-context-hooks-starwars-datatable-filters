import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const filterComparison = ({ column, comparison, value }, planet) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return [];
  }
};

const sortArr = (numberValues, column, data) => {
  let sorted = data;
  if (numberValues.includes(column)) {
    sorted = data.sort(function (a, b) {
      if (Number(a[column]) > Number(b[column])) {
        return 1;
      }
      if (Number(a[column]) < Number(b[column])) {
        return -1;
      }
      return 0;
    });
  } else {
    sorted = data.sort(function (a, b) {
      if (a[column] > b[column]) {
        return 1;
      }
      if (a[column] < b[column]) {
        return -1;
      }
      return 0;
    });
  }
  return sorted;
};

const orderPlanets = (filteredData, sort, column) => {
  const numberValues = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const newData =
    sort === 'ASC'
      ? sortArr(numberValues, column, filteredData)
      : sortArr(numberValues, column, filteredData).reverse();
  return newData;
};

function filterNames(filteredData, filterByName) {
  return filteredData.filter(({ name }) => name.match(new RegExp(filterByName.name, 'i')));
}
function filterNumeric(filteredData, filterByNumericValues) {
  const toReduce = (acc, cur) => acc.filter((planet) => filterComparison(cur, planet));
  return filterByNumericValues.reduce(
    (acc, cur) => toReduce(acc, cur),
    filteredData,
  );
}
const FilterData = (data) => {
  const { stateFilters } = useContext(StarWarsContext);
  const {
    filterByName,
    filterByNumericValues,
    order: { column, sort },
  } = stateFilters;

  let filteredData = data;
  filteredData = orderPlanets(filteredData, sort, column);
  filteredData = filterNames(filteredData, filterByName);
  filteredData = filterNumeric(filteredData, filterByNumericValues);
  return (
    <tbody>
      {filteredData.map((planet) => (
        <tr key={planet.name}>
          {Object.values(planet).map((planetValue) => (
            <td key={planetValue}>{planetValue}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default FilterData;
