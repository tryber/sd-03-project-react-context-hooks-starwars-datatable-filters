import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableHeaders from './TableHeaders';

const Table = () => {
  console.log(useContext(StarWarsContext));
  const { fetchData, filteredData, setData } = useContext(StarWarsContext);
  useEffect(() => {
    fetchData();
    return setData([]);
  }, []);

  return filteredData.length > 0 ? (
    <table border="1px">
      <tbody>
        <TableHeaders heads={Object.keys(filteredData[0])} />
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
