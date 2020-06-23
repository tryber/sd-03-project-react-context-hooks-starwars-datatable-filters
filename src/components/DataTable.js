import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const DataTable = () => {

  const { filterOrder: { order: { sort } } } = useContext(StarWarsContext);
  let { filterOrder: { order: { column } } } = useContext(StarWarsContext);
  const { filterByName } = useContext(StarWarsContext);
  const { filterByNumericValues } = useContext(StarWarsContext);
  const { data } = useContext(StarWarsContext);

  const filterComparison = (column, comparison, value, planet) => {
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
  }

  const order = (numberValues, column, data) => {
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
        if ((a[column]) > (b[column])) {
          return 1;
        }
        if ((a[column]) < (b[column])) {
          return -1;
        }
        return 0;
      });
    }
    return sorted;
  }

  const orderPlanets = (filteredData) => {
    column = (column === 'Name') ? 'name' : column;
    const numberValues = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const newData = (sort === 'ASC')
      ? order(numberValues, column, filteredData)
      : order(numberValues, column, filteredData).reverse();
    return newData;
  }

  const filterNames = (filteredData) => {
    return filteredData.filter(({ name }) => name.match(new RegExp(filterByName.name, 'i')));
  }

  const filterNumeric = (filteredData) => {

    return filterByNumericValues.reduce((acc, { column, comparison, value }) => {
      return acc.filter((planet) => filterComparison(column, comparison, value, planet));
    }, filteredData);
  }

  const renderTableHead = (data) => {
    return (
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key}>
              {key}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  const renderTableBody = (data) => {
    let filteredData = data;
    filteredData = orderPlanets(filteredData);
    filteredData = filterNames(filteredData);
    filteredData = filterNumeric(filteredData);
    return (
      <tbody>
        {filteredData.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((planetValue) => (
              <td key={planetValue}>{planetValue}</td>))}
          </tr>
        ))}
      </tbody>
    );
  }

  const renderTable = (data) => {
    return (
      <table border="1px">
        {renderTableHead(data)}
        {renderTableBody(data)}
      </table>
    );
  }

  return (
    <div>
      {renderTable(data)}
    </div>
  );
}

DataTable.defaultProps = {
  data: [],
  filterByNumericValues: [],
  filterByName: {},
  order: {},
};

export default DataTable;
