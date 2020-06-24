import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableHeaders from './TableHeaders';

const Table = () => {
  const { filteredData } = useContext(StarWarsContext);

  return filteredData.length > 0 ? (
    <table border="1px">
      <tbody>
        <TableHeaders heads={Object.keys(filteredData[0])} />
        {filteredData.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((value) => (value !== planet.name
              ? <td key={value}>{value}</td>
              : <td data-testid="planet-name" key={value}>{value}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  )
    : <h2>Loading</h2>;
};

export default Table;
