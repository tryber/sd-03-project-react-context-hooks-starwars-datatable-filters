import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import RenderTHead from './RenderTHead';
import RenderTBody from './RenderTBody';

const TableRender = () => {
  const { dataTable, isRequesting, requestDataTable } = useContext(StarWarsContext);

  useEffect(() => {
    requestDataTable();
  }, []);

  if (isRequesting) return <h1>Loading ...</h1>;

  return (
    <table>
      <RenderTHead />
      <RenderTBody
        filteredTable={dataTable}
      />
    </table>
  );
};

export default TableRender;
