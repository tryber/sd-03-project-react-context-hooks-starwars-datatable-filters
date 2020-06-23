import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { filtersContext } from '../context/Filters';
import * as actions from '../actions/NumFilterActions';

function FilterSetted({ id, obj }) {
  const [, dispatch] = useContext(filtersContext);
  return (
    <div data-testid="filter" className="filters container">
      <span>{Object.values(obj).map((value) => `${value} | `)}</span>
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
  obj: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]).isRequired,
  ).isRequired,
  id: PropTypes.number.isRequired,
};

export default FilterSetted;
