import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { filtersContext } from '../context/Filters';
import * as actions from '../actions/NumFilterActions';

function FilterSetted({ id, column, comparison, value }) {
  const [, dispatch] = useContext(filtersContext);
  return (
    <div data-testid="filter" className="filters container">
      <span>{column} | {comparison} | {value}</span>
      <button
        className="radius-border filter-button"
        type="button"
        onClick={() => dispatch(actions.removeFilter(id))}
      >
        X
      </button>
    </div>
  );
}

FilterSetted.propTypes = {
  id: PropTypes.number.isRequired,
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default FilterSetted;
