import React from 'react';
import FilterByNameBar from './FilterByNameBar';
import FilterByValuesBar from './FilterByValuesBar';
import SelectedFilters from './SelectedFilters';
import SortColumnsFilter from './SortColumnsFilter';

const FilterContainer = () => (
  <div>
    <FilterByNameBar />
    <div>
      <FilterByValuesBar />
    </div>
    <div>
      <SortColumnsFilter />
    </div>
    <div>
      <SelectedFilters />
    </div>
  </div>
);

export default FilterContainer;
