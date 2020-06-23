import React, { useContext } from 'react';
import PlanetTableContext from '../../context/context';
import filterDataByNumericValue from '../../helpers/index';
import NoResultsTableBody from './NoResultsTableBody';
import RenderResultsTableBody from './RenderResultsTableBody';

const TableBody = () => {
  const {
    fetchData: { data },
    filterMethods,
  } = useContext(PlanetTableContext);
  const {
    filterByName: { name },
    filterByNumericValues,
    order: { column, sort },
  } = filterMethods.filters;
  const filteredData = filterDataByNumericValue(
    data,
    name,
    column,
    sort,
    filterByNumericValues,
  );
  return filteredData.length === 0 ? (
    <NoResultsTableBody />
  ) : (
    <RenderResultsTableBody planetData={filteredData} />
  );
};

export default TableBody;
