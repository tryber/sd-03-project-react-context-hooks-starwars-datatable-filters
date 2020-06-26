import React, { useContext, useState } from 'react';

import Button from '@material-ui/core/Button';

import { dataPlanetsContext } from '../context/DataPlanets';
import { filtersContext } from '../context/Filters';
import { activateOrder } from '../actions/filterActions';
import { renderOptions, allValuesSetted } from '../services/constants';
import ButtonStyle from '../styles/Button';

const renderRadio = (value, text, setSort) => (
  <label htmlFor={`sort-radio-${value}`} className="container">
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
  const [column, setColumn] = useState('');
  const [sort, setSort] = useState('');
  const [{ headers }] = useContext(dataPlanetsContext);
  const [, dispatch] = useContext(filtersContext);
  const { root } = ButtonStyle();

  return (
    <fieldset className="container">
      <span>Order By Column</span>
      <div>
        {renderRadio('ASC', 'Ascendent', setSort)}
        {renderRadio('DESC', 'Descendent', setSort)}
        <label htmlFor="column-order" className="container">
          Column
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
        <Button
          classes={{ root }}
          color="secondary"
          disabled={!allValuesSetted(column, sort)}
          data-testid="column-sort-button"
          onClick={() => dispatch(activateOrder({ column, sort }))}
          variant="contained"
        >
          Apply Order
        </Button>
      </div>
    </fieldset>
  );
}

export default OrderFilters;
