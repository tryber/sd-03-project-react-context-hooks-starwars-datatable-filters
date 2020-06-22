import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableHeaders from './TableHeaders';

const Table = () => {
  console.log(useContext(StarWarsContext));
  const { fetchData, data } = useContext(StarWarsContext);
  useEffect(() => fetchData(), []);

  return (
    <table border="1px">
      <tbody>
        {data.length > 0 && <TableHeaders heads={Object.keys(data[0])} />}
        {data ? data.map((planet) => (
          <tr key={planet.name}>
            {Object.values(planet).map((value) => <td key={value}>{value}</td>)}
          </tr>
        ))
          : <h2>Loading</h2>}
      </tbody>
    </table>
  );
};

export default Table;
