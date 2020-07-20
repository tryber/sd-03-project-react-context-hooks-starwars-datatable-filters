import React from 'react';
import FilterByName from './FilterByName';
import FilterByValue from './FilterByValue';
import FilterByOrder from './FilterByOrder';
import RemoveFilter from './RemoveFilter';

function Filters() {
  return (
    <div>
      <FilterByName />
      <FilterByValue />
      <FilterByOrder />
      <RemoveFilter />
    </div>
  );
}

export default Filters;
