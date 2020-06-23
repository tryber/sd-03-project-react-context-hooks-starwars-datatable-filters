import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import RenderTBody from './RenderTBody';
import RenderTHead from './RenderTHead';
import filterByNumeric from '../services/Filters';

const TableRender = () => {
  const {
    tableData: { dataTable, isRequesting },
    filterData: { filters },
  } = useContext(StarWarsContext);

  if (isRequesting) return <h1>Loading ...</h1>;

  const filteredTable = filterByNumeric(
    filters.filterByName.name, dataTable, filters.filterByNumericValues,
  );

  return (
    <table>
      <RenderTHead />
      <RenderTBody
        filteredTable={filteredTable}
      />
    </table>
  );
};

export default TableRender;
