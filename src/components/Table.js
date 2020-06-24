import React, { useContext } from 'react';
import Tbody from './Tbody';
import Thead from './Thead';
import { StarWarsContext } from '../context/StarWarsContext';

const Table = () => {
  const { data, textFilter } = useContext(StarWarsContext);

  const filterDataByText = (dataSent) => {
    if (textFilter.filterByName.name !== '') {
      return dataSent.filter(({ name }) =>
      name.toLowerCase().includes(textFilter.filterByName.name.toLowerCase()));
    }
    return dataSent;
  };

  return (
    <div>
      <h1>Star Wars Datatable With Hooks</h1>
        <table>
        <Thead />
        <Tbody data={filterDataByText(data)} />
      </table>
    </div>
  );

}

export default Table;
