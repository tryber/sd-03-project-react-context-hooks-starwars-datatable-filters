import React, { useContext } from 'react';
import { StarContext } from './Context';

function RemoveFilter() {
  const { removeFilterNumeric,
    filters: { filterByNumericValues: numericValues },
  } = useContext(StarContext);

  const onClick = (type) => removeFilterNumeric(type);

  return numericValues.map((type) => (
    <div data-testid="filter" key={type.column}>
      <span>{`${type.column} - ${type.comparison} - ${type.value} `}</span>
      <button type="button" onClick={() => onClick(type)}>
        X
      </button>
    </div>
  ));
}

export default RemoveFilter;
