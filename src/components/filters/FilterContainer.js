import React from 'react';
import FilterByNameInput from './FilterByNameInput';

function FilterContainer({ onChange }) {
  return (
    <div>
      <FilterByNameInput onChange={onChange} />
    </div>
  );
}

export default FilterContainer;
