import React, { useContext } from 'react';

import { dataPlanetsContext } from '../context/DataPlanets';
import { filtersContext } from '../context/Filters';
import * as actions from '../actions/orderActions';
import * as constants from '../services/constants';

const renderRadio = (value, text, callback) => (
  <label htmlFor={`sort-radio-${value}`}>
    {text}
    <input
      className="radius-border"
      data-testid="column-sort-input"
      id={`sort-radio-${value}`}
      name="sort-filter-radio"
      onChange={() => callback('sort', value)}
      type="radio"
      value={value}
    />
  </label>
);

function OrderFilters() {
  const { state: { headers } } = useContext(dataPlanetsContext);
  const [{ order: { column } }, dispatch] = useContext(filtersContext);

  const change = (prop, value) => dispatch(actions.changeOrder(prop, value));

  return (
    <fieldset className="container">
      <span>Order By Column</span>
      <div className="">
        {renderRadio('ASC', 'Ascendent', change)}
        {renderRadio('DESC', 'Descendent', change)}
        <label htmlFor="column-order" className="container">
          column
          <select
            className="radius-border"
            data-testid="column-sort"
            defaultValue={column}
            id="column-order"
            name="column-order"
            onChange={({ target: { value } }) => change('column', value)}
          >
            {constants.renderOptions(headers)}
          </select>
        </label>
        <button
          className="radius-border filter-button"
          data-testid="column-sort-button"
          onClick={() => dispatch(actions.activateOrder())}
          type="button"
        >
          Apply Order
        </button>
      </div>
    </fieldset>
  );
}

export default OrderFilters;
