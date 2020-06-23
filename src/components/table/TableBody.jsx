import React, { useContext } from 'react';
import PlanetTableContext from '../../context/context';
import filterDataByNumericValue from '../../helpers/index';
import NoResultsTableBody from './NoResultsTableBody';

const TableBody = () => {
  const {
    fetchData: { data },
    filterMethods,
  } = useContext(PlanetTableContext);
  const {
    filterByName: { name },
    filterByNumericValues,
    order: { column, sort },
  } = filterMethods.filters;
  const filteredData = filterDataByNumericValue(
    data,
    name,
    column,
    sort,
    filterByNumericValues,
  );
  return filteredData.length === 0 ? (
    <NoResultsTableBody />
  ) : (
    <tbody>
      {filteredData.map((planet) => (
        <tr key={planet.name}>
          <td data-testid="planet-name">{planet.name}</td>
          <td>{planet.rotation_period}</td>
          <td>{planet.orbital_period}</td>
          <td>{planet.diameter}</td>
          <td>{planet.climate}</td>
          <td>{planet.gravity}</td>
          <td>{planet.terrain}</td>
          <td>{planet.surface_water}</td>
          <td>{planet.population}</td>
          <td>
            {planet.films.map((film) => (
              <a
                href={film}
                target="_blank"
                rel="noopener noreferrer"
                key={film}
              >
                {film}
              </a>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>
            <a href={planet.url} target="_blank" rel="noopener noreferrer">
              {planet.url}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
