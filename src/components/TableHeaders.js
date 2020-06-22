import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const TableHeaders = () => {
  const { data } = useContext(StarWarsContext);
  const heads = Object.keys(data[0]);
  return (<tr>{heads.map((head) => head !== 'residents' && <th key={head}>{head}</th>)}</tr>);
};
export default TableHeaders;
