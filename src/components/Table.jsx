import React, { useContext } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { MyContext } from '../context/context';

const handleFilter = (list, { column, comparison, value }) => {
  switch (comparison) {
    case 'maior que': return list.filter(((planet) => Number(planet[column]) > Number(value)));
    case 'menor que': return list.filter(((planet) => Number(planet[column]) < Number(value)));
    case 'igual a': return list.filter(((planet) => Number(planet[column]) === Number(value)));
    default: return list;
  }
};
const Table = () => {
  const { data, nameFilters, numericValues } = useContext(MyContext);
  let sortedList = data.filter((planet) => planet.name.includes(nameFilters.name));
  numericValues.forEach((e) => { sortedList = handleFilter(sortedList, e); });
  console.log(sortedList);
  return (
    <table>
      <TableHeader />
      <TableBody planets={sortedList} />
    </table>
  );
};

export default Table;
