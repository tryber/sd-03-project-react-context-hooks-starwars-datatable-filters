import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/toData/StarWarsContext';
import TableData from './TableData';

function Table() {
  const { getPlanetsData, data } = useContext(StarWarsContext);
  useEffect(() => getPlanetsData(), []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th data-testid="planet-name">Nome</th>
            <th>População</th>
            <th>Clima</th>
            <th>Criado</th>
            <th>Diametro</th>
            <th>Editado</th>
            <th>Período Orbital</th>
            <th>Período Rotacional</th>
            <th>Terreno</th>
            <th>Superfície Aquática</th>
            <th>Filmes</th>
            <th>Gravidade</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <TableData planets={data} />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
