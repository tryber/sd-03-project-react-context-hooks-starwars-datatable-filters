import React, {
  useContext,
} from 'react';
import StarWarsContext from '../context/StarWarsContext';

function DataTable() {
  const {
    stateFetch,
    stateFilters,
  } = useContext(StarWarsContext);
  const { data } = stateFetch;
  const {
    filterByName,
    filterByNumericValues,
    order: { column, sort },
  } = stateFilters;

  const filterComparison = (
    column,
    comparison,
    value,
    planet,
  ) => {
    switch (comparison) {
      case 'maior que':
        return (
          Number(planet[column]) >
          Number(value)
        );
      case 'menor que':
        return (
          Number(planet[column]) <
          Number(value)
        );
      case 'igual a':
        return (
          Number(planet[column]) ===
          Number(value)
        );
      default:
        return [];
    }
  };

  const sortArrAsc = (
    numberValues,
    column,
    data,
  ) => {
    let sorted = data;
    if (numberValues.includes(column)) {
      sorted = data.sort(function (
        a,
        b,
      ) {
        if (
          Number(a[column]) >
          Number(b[column])
        ) {
          return 1;
        }
        if (
          Number(a[column]) <
          Number(b[column])
        ) {
          return -1;
        }
        return 0;
      });
    } else {
      sorted = data.sort(function (
        a,
        b,
      ) {
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

  const sortArrDesc = (
    numberValues,
    column,
    data,
  ) => {
    let sorted = data;
    if (numberValues.includes(column)) {
      sorted = data.sort(function (
        a,
        b,
      ) {
        if (
          Number(a[column]) <
          Number(b[column])
        ) {
          return 1;
        }
        if (
          Number(a[column]) >
          Number(b[column])
        ) {
          return -1;
        }
        return 0;
      });
    } else {
      sorted = data.sort(function (
        a,
        b,
      ) {
        if (a[column] < b[column]) {
          return 1;
        }
        if (a[column] > b[column]) {
          return -1;
        }
        return 0;
      });
    }
    return sorted;
  };

  const orderPlanets = (
    filteredData,
  ) => {
    const numberValues = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const newData =
      sort === 'ASC'
        ? sortArrAsc(
            numberValues,
            column,
            filteredData,
          )
        : sortArrDesc(
            numberValues,
            column,
            filteredData,
          );
    return newData;
  };

  const filterNames = (
    filteredData,
  ) => {
    return filteredData.filter(
      ({ name }) =>
        name.match(
          new RegExp(
            filterByName.name,
            'i',
          ),
        ),
    );
  };

  const filterNumeric = (
    filteredData,
  ) => {
    return filterByNumericValues.reduce(
      (
        acc,
        { column, comparison, value },
      ) => {
        return acc.filter((planet) =>
          filterComparison(
            column,
            comparison,
            value,
            planet,
          ),
        );
      },
      filteredData,
    );
  };

  const renderTableHead = () => {
    return (
      <thead>
        <tr>
          {Object.keys(data[0]).map(
            (key) => (
              <th key={key}>{key}</th>
            ),
          )}
        </tr>
      </thead>
    );
  };

  const renderTableBody = () => {
    let filteredData = data;
    filteredData = orderPlanets(
      filteredData,
    );
    filteredData = filterNames(
      filteredData,
    );
    filteredData = filterNumeric(
      filteredData,
    );
    return (
      <tbody>
        {filteredData.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map(
              (planetValue) => (
                <td key={planetValue}>
                  {planetValue}
                </td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    );
  };

  const renderTable = () => {
    return (
      <table border='1px'>
        {renderTableHead()}
        {renderTableBody()}
      </table>
    );
  };

  return <div>{renderTable()}</div>;
}

export default DataTable;
