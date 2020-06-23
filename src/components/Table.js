import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import HeaderTable from './HeaderTable';

const Table = () => {
  const { filteredData } = useContext(StarWarsContext);
  return filteredData.length > 0 ? (
    <table border="1px">
      <tbody>
        <HeaderTable heads={Object.keys(filteredData[0])} />
        {filteredData.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((value) => <td key={value}>{value}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
    : <h2>Loading</h2>;
};

export default Table;
