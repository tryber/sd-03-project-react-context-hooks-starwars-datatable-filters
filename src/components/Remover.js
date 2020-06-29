import React, { useContext } from 'react';
import contextAPI from '../context/contextAPI';

function Remove() {
  const { activeFilter, changeFilterNumeric } = useContext(contextAPI);

  const display = (list) => {
    return (
      <p
        key={list.column}
        data-testid="filter"
      >
        <span>{list.column}</span>
        <span>{list.comparison}</span>
        <span>{list.value}</span>
        <button
          type="button"
          onClick={() => changeFilterNumeric(list, 'remove')}
        >
          X
        </button>
      </p>
    );
  };

  const infoFilters = activeFilter.filterByNumericValues.filter((elem) => elem.column !== '');
  return (
    <div>
      <h1>Used Filters</h1>
      {infoFilters.map((filter) => display(filter))}
    </div>
  );
}

export default Remove;
