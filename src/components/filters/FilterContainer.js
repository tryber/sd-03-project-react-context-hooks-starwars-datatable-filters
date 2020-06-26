import React from 'react';
import FilterByNameInput from './FilterByNameInput';
import FilterByValuesBar from './FilterByValuesBar';
import SortColumnsFilter from './SortColumnsFilter';
import SelectedFilters from './SelectedFilters';

function FilterContainer() {
  return (
    <div>
      <FilterByNameInput />
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
}

export default FilterContainer;
