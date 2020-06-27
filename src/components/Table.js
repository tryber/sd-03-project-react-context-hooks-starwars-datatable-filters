import React from 'react';
import TableRow from './TableRow';

const returnComparator = (elem, col, comp, val) => {
  switch (comp) {
    case 'menor que':
      return (Number(elem[col]) < +val);
    case 'igual a':
      return (Number(elem[col]) === +val);
    case 'maior que':
      return (Number(elem[col]) > +val);
    default:
      return false;
  }
};

function numericFilter(ftPlanets, numFilters) {
  return (numFilters.reduce((acc, {
    column, comparison, value,
  }) => acc.filter((planet) => returnComparator(planet, column, comparison, value)), ftPlanets));
}

function Table(planets, nameFilter, numFilter) {
  const filteredByName = planets.filter((pl) => (
    pl.name.toLowerCase()).includes(nameFilter.name));
  const filteredByBoth = numericFilter(filteredByName, numFilter);

  return (
    <table>
      <thead>
        <tr>
          <th key="name">Name</th>
          <th key="diameter">Diameter</th>
          <th key="population">Population</th>
          <th key="climate">Climate</th>
          <th key="orbital">Orbital period</th>
          <th key="rotation">Rotation period</th>
          <th key="terrain">Terrain</th>
          <th key="water">Surface Water</th>
          <th key="gravity">Gravity</th>
          <th key="films">Films</th>
          <th key="created">Created</th>
          <th key="edited">Edited</th>
          <th key="url">URL</th>
        </tr>
      </thead>
      <tbody>
        {filteredByBoth.map((ftplanet) => TableRow(ftplanet))}
      </tbody>
    </table>
  );
}

Table.defaultProps = {
  numFilters: [],
};

export default Table;
