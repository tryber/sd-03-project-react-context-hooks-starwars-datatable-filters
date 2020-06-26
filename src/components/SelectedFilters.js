import React, { useContext } from 'react';
import FiltersContext from '../context/FiltersContext';
import AllFiltersArrContext from '../context/AllFiltersArrContext';

const SelectedFilters = () => {
  const {
    filters: { filterByNumericValues }, filterByNumericValuesFunc,
  } = useContext(FiltersContext);

  const { setAllFiltersFunc, allFiltersArr } = useContext(AllFiltersArrContext);

  const displayFilterName = (column) => {
    const newArr = [...allFiltersArr];
    newArr.push(column);
    setAllFiltersFunc(newArr);
  };

  const displaySearches = (column, arrSearches) => {
    const newArr = [...arrSearches].filter((e) => e.column !== column);
    filterByNumericValuesFunc(newArr);
  };

  if (filterByNumericValues.length === 0) return <div />;
  return (
    <div>
      {filterByNumericValues.map((e) => (
        <div data-testid="filter" key={e.column}>
          <div>{e.column}</div>
          <div>{e.comparison}</div>
          <div>{e.numericValue}</div>
          <button
            type="button"
            onClick={() => {
              displayFilterName(e.column);
              displaySearches(e.column, filterByNumericValues);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters;
