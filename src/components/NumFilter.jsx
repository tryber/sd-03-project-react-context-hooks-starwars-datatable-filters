import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { filtersContext } from '../context/Filters';
import { createFilter } from '../actions/filterActions';
import * as constants from '../services/constants';
import ButtonStyle from '../styles/Button';

const comparisonOptions = ['maior que', 'menor que', 'igual a'];

const renderSelectOf = (name, value, optionsList, set) => (
  <label htmlFor={name} className="container">
    {name}
    <select
      className="radius-border"
      data-testid={`${name}-filter`}
      value={value}
      id={name}
      name={name}
      onChange={({ target }) => set(target.value)}
    >
      {constants.renderOptions(optionsList)}
    </select>
  </label>
);

function NumFilter({ columnOptions }) {
  const [column, setColumn] = useState('');
  const [value, setValue] = useState('');
  const [comparison, setComparison] = useState('');
  const [, dispatch] = useContext(filtersContext);
  const classes = ButtonStyle();

  return (
    <fieldset className="container">
      <span>Filter by Numeric Params</span>
      {renderSelectOf('column', column, columnOptions, setColumn)}
      {renderSelectOf('comparison', comparison, comparisonOptions, setComparison)}
      <label htmlFor="value-filter" className="container">
        Number
        <input
          className="radius-border"
          data-testid="value-filter"
          value={value}
          id="value-filter"
          name="value-filter"
          onChange={({ target }) => setValue(target.value)}
          type="number"
        />
      </label>
      <Button
        classes={{ root: classes.root, label: classes.label }}
        color="secondary"
        disabled={!constants.allValuesSetted(column, comparison, value)}
        data-testid="button-filter"
        onClick={() => dispatch(createFilter({ column, comparison, value }))}
        variant="outlined"
      >
        Activate
      </Button>
    </fieldset>
  );
}

NumFilter.propTypes = {
  columnOptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default NumFilter;
