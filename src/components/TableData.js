import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from './Table';

function TableData() {
  const  { getPlanetsData, data }  = useContext(StarWarsContext);

  useEffect(() => getPlanetsData(), []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
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
          <Table planets={data}/>
        </tbody>
      </table>
    </div>
  );
}

export default TableData;