import React, { useContext } from 'react';

import SearchBox from './SearchBox';
import NumFilter from './NumFilter';
import FilterSetted from './FilterSetted';
import OrderFilters from './OrderFilters';

import { filtersContext } from '../context/Filters';
import { formatContext } from '../context/Format';
import * as constants from '../services/constants';
import './FiltersBar.css';

const takeUnused = (completeList, usedListOfObj) => (
  completeList.filter((option) => (
    usedListOfObj.every(({ column }) => column !== option)
  ))
);

function FilterBar() {
  const [{ filterByNumericValues }] = useContext(filtersContext);
  const [isMultiHeader, setIMultiHeader] = useContext(formatContext);
  return (
    <section className="filter-bar">
      <div className="filters">
        <SearchBox />
        <NumFilter columnOptions={takeUnused(constants.numericColumn, filterByNumericValues)} />
        <OrderFilters />
      </div>
      <div>
        {filterByNumericValues.map(({ column, comparison, value }, id) => (
          <FilterSetted
            id={id}
            key={column}
            column={column}
            comparison={comparison}
            value={value}
          />
        ))}
      </div>
      <div>
        <button
          className="radius-border filter-button"
          type="button"
          onClick={() => setIMultiHeader(!isMultiHeader)}
        >
          Change Table Format
        </button>
      </div>
    </section>
  );
}

export default FilterBar;
