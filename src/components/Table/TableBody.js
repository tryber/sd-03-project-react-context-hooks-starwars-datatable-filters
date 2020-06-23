import React, { useContext } from 'react';
import orderFuncAsc from '../Filters/orderFuncAsc';
import orderFuncDesc from '../Filters/orderFuncDesc';
import StarWarsContext from '../../context/StarWarsContext';

function TableBody() {
  const {
    data,
    filters: {
      filterByName: name,
      filterByNumericValues: numericValues,
      order: { sort, column: columnSort },
    },
  } = useContext(StarWarsContext);
  
  const planets =
    sort === 'ASC'
      ? orderFuncAsc(data, name, numericValues, columnSort)
      : orderFuncDesc(data, name, numericValues, columnSort);

  return (
    <tbody>
      {planets.map((planet) => (
        <tr key={planet.name}>
          <td>{planet.name}</td>
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
              <span key={film}>{film}</span>
            ))}
          </td>
          <td>{planet.created}</td>
          <td>{planet.edited}</td>
          <td>{planet.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
