import React, { useContext, useEffect, useState } from 'react';
import OrdemAscedente from '../Filtros/OrdemAscedente';
import OrdemDescendente from '../Filtros/OrdemDescendente';
import StarWarsContext from '../../context/StarWarsContext';

function TBody() {
  const [planets, setPlanets] = useState([]);
  const {
    data,
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order: { sort, column: columnSort },
    },
  } = useContext(StarWarsContext);

  useEffect(() => {
    const filtered = sort === 'ASC'
      ? OrdemAscedente(data, name, numericValues, columnSort)
      : OrdemDescendente(data, name, numericValues, columnSort);
    setPlanets(filtered);
  }, [name, numericValues, columnSort, sort]);

  return (
    <tbody>
      {planets.map((sw) => (
        <tr key={sw.name}>
          <td data-testid="planet-name">{sw.name}</td>
          <td>{sw.rotation_period}</td>
          <td>{sw.orbital_period}</td>
          <td>{sw.diameter}</td>
          <td>{sw.climate}</td>
          <td>{sw.gravity}</td>
          <td>{sw.terrain}</td>
          <td>{sw.surface_water}</td>
          <td>{sw.population}</td>
          <td>
            {sw.films.map((filme) => (
              <span key={filme}>{filme}</span>
            ))}
          </td>
          <td>{sw.created}</td>
          <td>{sw.edited}</td>
          <td>{sw.url}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TBody;
