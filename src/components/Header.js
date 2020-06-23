import React, { useContext } from 'react'
import StarWarsContext from '../context/StarWarsContext'
import useContextAPIPlanets from '../hooks/useContextAPIPlanets';

export default function Header() {
  const planetsAPIreq = useContextAPIPlanets(StarWarsContext);
  const tHead = () => (
    <thead>
      <tr>
        <th>name</th>
        <th>climate</th>
        <th>created</th>
        <th>diameter</th>
        <th>edited</th>
        <th>films</th>
        <th>gravity</th>
        <th>orbital_period</th>
        <th>population</th>
        <th>rotation_period</th>
        <th>surface_water</th>
        <th>terrain</th>
        <th>url</th>
      </tr>
    </thead>
  );
  
  return (typeof planetsAPIreq=== 'object' && tHead())
}
