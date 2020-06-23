import React, { useEffect, useContext } from 'react';
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

const filterSelectedValues = (planetFiltered, nameInput, inputFilter) => {
  if (inputFilter) {
    return inputFilter.reduce(
      (acc, { column, comparison, value }) =>
        acc.filter((planet) => switchComparison(column, comparison, value, planet),
        ),
      filteredPlanet(planetFiltered, nameInput),
    );
  }
  return filteredPlanet(planetFiltered, nameInput);
};

const filteredPlanet = (planets, nameInput) => {
  if (nameInput !== undefined) {
    return planets.filter(({ name }) => name.toLowerCase().includes(nameInput.toLowerCase()));
  }
  return planets;
};

function Table() {
  const { fetchAPI, loading, data, filterSelect } = useContext(APIcontext);
  const nameInput = filterSelect.filters.filterByName.name;
  const inputFilter = filterSelect.filters.filterByNumericValues;

  useEffect(() => {
    fetchAPI();
  }, []);

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
        {data && <CreateTable data={filterSelectedValues(data, nameInput, inputFilter)} />}
      </div>
      {loading && <h1>Loading...</h1>}
    </div>
  );
}

export default Table;
