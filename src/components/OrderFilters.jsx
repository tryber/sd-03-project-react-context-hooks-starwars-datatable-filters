import React, { useContext, useState } from 'react';

import { dataPlanetsContext } from '../context/DataPlanets';
import { filtersContext } from '../context/Filters';
import { activateOrder } from '../actions/filterActions';
import { renderOptions } from '../services/constants';

const renderRadio = (value, text, setSort) => (
  <label htmlFor={`sort-radio-${value}`}>
    {text}
    <input
      className="radius-border"
      data-testid={`column-sort-input-${value.toLowerCase()}`}
      id={`sort-radio-${value}`}
      name="sort-filter-radio"
      onChange={() => setSort(value)}
      type="radio"
      value={value}
    />
  </label>
);

function OrderFilters() {
  const [column, setColumn] = useState('Name');
  const [sort, setSort] = useState('ASC');
  const [{ headers }] = useContext(dataPlanetsContext);
  const [, dispatch] = useContext(filtersContext);

  return (
    <fieldset className="container">
      <span>Order By Column</span>
      <div>
        {renderRadio('ASC', 'Ascendent', setSort)}
        {renderRadio('DESC', 'Descendent', setSort)}
        <label htmlFor="column-order" className="container">
          column
          <select
            className="radius-border"
            data-testid="column-sort"
            defaultValue={column}
            id="column-order"
            name="column-order"
            onChange={({ target }) => setColumn(target.value)}
          >
            {renderOptions(headers)}
          </select>
        </label>
        <button
          className="radius-border filter-button"
          data-testid="column-sort-button"
          onClick={() => dispatch(activateOrder({ column, sort }))}
          type="button"
        >
          Apply Order
        </button>
      </div>
    </fieldset>
  );
}

export default OrderFilters;
