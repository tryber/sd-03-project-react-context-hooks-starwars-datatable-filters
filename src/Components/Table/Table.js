import React, { useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';

import InputNamePlanet from './InputNamePlanet';
import CreateTable from './CreateTable';
import NavBar from './NavBar';
// import RemoveFilters from './RemoveFilters';

import './Table.css';
import APIcontext from '../Context/APIcontext';

function switchComparison(column, comparison, value, planet) {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
}

function Table() {
  const { fetchAPI, loading, data, filterSelect } = useContext(APIcontext);

  useEffect(() => {
    fetchAPI();
  }, []);

  const filteredPlanet = (data) => {
    const nameInput = filterSelect.filters.filterByName.name;
    if (nameInput !== undefined) {
      return data.filter(({ name }) => name.toLowerCase().includes(nameInput.toLowerCase()));
    }
    return data;
  };

  const filterSelectedValues = (data) => {
    const inputFilter = filterSelect.filters.filterByNumericValues;
    if (inputFilter) {
      return inputFilter.reduce(
        (acc, { column, comparison, value }) =>
          acc.filter((planet) => switchComparison(column, comparison, value, planet),
          ),
        filteredPlanet(data),
      );
    }
    return filteredPlanet(data);
  };

  return (
    <div>
      <div>
        <hr style={{ border: 'outset' }} />
        <h1>Star Wars Table</h1>
        <hr style={{ border: 'outset' }} />
      </div>
      <div className="input-filter">
        <InputNamePlanet />
        <NavBar />
        {/* <RemoveFilters /> */}
      </div>
      <div className="TabelaProdutos">
        {data && <CreateTable data={filterSelectedValues(data)} />}
      </div>
      {loading && <h1>Loading...</h1>}
    </div>
  );
}

// Table.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   loading: PropTypes.bool.isRequired,
//   nameInput: PropTypes.string.isRequired,
//   inputFilter: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.string,
//     })
//   ).isRequired,
//   fetchAPI: PropTypes.func.isRequired,
// };

export default Table;
