import React from 'react';
import PropTypes from 'prop-types';

const PlanetsApi = ({ planets }) => {
  const headers = [
    'Name', 'Rotation', 'Orbital', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface', 'Population', 'films', 'created', 'edited', 'url',
  ];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((title) => <th key={title}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet, i) => (
          <tr key={planet.name} className={i % 2 === 0 ? 'Par' : 'Impar'}>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.population}</td>
            <td>{planet.created}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

PlanetsApi.propTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rotation_period: PropTypes.string,
      orbital_period: PropTypes.string,
      diameter: PropTypes.string,
      climate: PropTypes.string,
      gravity: PropTypes.string,
      terrain: PropTypes.string,
      surface_water: PropTypes.string,
      population: PropTypes.string,
      film: PropTypes.string,
      created: PropTypes.string,
      edited: PropTypes.string,
      url: PropTypes.string,
    }),
  ).isRequired,
};

export default PlanetsApi;
