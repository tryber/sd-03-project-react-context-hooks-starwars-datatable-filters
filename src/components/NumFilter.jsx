import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { filtersContext } from '../context/Filters';
import * as actions from '../actions/NumFilterActions';
import * as constants from '../services/constants';

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const renderSelectOf = (name, value, optionsList, dispatch) => (
  <label htmlFor={name} className="container">
    {name}
    <select
      className="radius-border"
      data-testid={`${name}-filter`}
      value={value}
      id={name}
      name={name}
      onChange={({ target }) => dispatch(actions.changeValue(name, target.value))}
    >
      {constants.renderOptions(optionsList)}
    </select>
  </label>
);

function NumFilter({ columnOptions }) {
  const [{ inProgress: { column, value, comparison } }, dispatch] = useContext(filtersContext);

  return (
    <fieldset className="container">
      <span>Filter by Numeric Params</span>
      {renderSelectOf('column', column, columnOptions, dispatch)}
      {renderSelectOf('comparison', comparison, comparisonOptions, dispatch)}
      <label htmlFor="value-filter" className="container">
        number
        <input
          className="radius-border"
          data-testid="value-filter"
          value={value}
          id="value-filter"
          name="value-filter"
          onChange={({ target }) => dispatch(actions.changeValue('value', target.value))}
          type="number"
        />
      </label>
      <button
        className="radius-border filter-button"
        data-testid="button-filter"
        type="button"
        onClick={() => dispatch(actions.createFilter())}
      >
        Activate
      </button>
    </fieldset>
  );
}

NumFilter.propTypes = {
  columnOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default NumFilter;
