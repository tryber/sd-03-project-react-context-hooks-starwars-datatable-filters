 
import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const HeaderTable = () => {
  const { filteredData } = useContext(StarWarsContext);
  const heads = Object.keys(filteredData[0]);
  return (<tr>{heads.map((head) => head !== 'residents' && <th key={head}>{head}</th>)}</tr>);
};
export default HeaderTable;
