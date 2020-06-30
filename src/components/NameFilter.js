import React, { useContext } from 'react';
import { StarWarsContext } from './StarWarsContext';

function NameFilter() {
  const { updateNameFilter } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(event) => updateNameFilter(event.target.value.toLowerCase())}
      />
    </div>
  );
}

export default NameFilter;
