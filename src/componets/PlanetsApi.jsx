import React, { useContext, useState, useEffect } from 'react';
import { starWarsContext } from '../context/starWarsContext';

const PlanetsApi = () => {
  // linha 12 a 16 faz a mesma coisa que 7, mas o teste nao aceita
  // const { planets } = useContext(starWarsContext)
  const [planets, setPlanets] = useState([])
  
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then(response => response.json()
    .then(planets => setPlanets(planets.results)))
  }, []);
  console.log('alguem me loga', planets)

  const headers = [
    'Name',
    'Rotation',
    'Orbital',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface',
    'Population',
    'films',
    'created',
    'edited',
    'url',
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
}

export default PlanetsApi;
