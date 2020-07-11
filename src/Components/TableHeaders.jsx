import React, { useContext } from 'react';
import StarWarsContext from '../Context/StarWarsContext';

const TableHeaders = () => {
  const { filteredData } = useContext(StarWarsContext);
  const heads = Object.keys(filteredData[0]);
  return (<tr>{heads.map((head) => head !== 'residents' && <th key={head}>{head}</th>)}</tr>);
};
export default TableHeaders;
