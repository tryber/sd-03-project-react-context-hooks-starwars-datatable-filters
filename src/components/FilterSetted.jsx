import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { filtersContext } from '../context/Filters';
import { removeFilter } from '../actions/filterActions';
import { Button } from '@material-ui/core';
import ButtonStyle from '../styles/Button';

function FilterSetted({ id, obj }) {
  const [, dispatch] = useContext(filtersContext);
  const classes = ButtonStyle();
  return (
    <div data-testid="filter" className="filters container">
      <span>{Object.values(obj).map((value) => `${value} | `)}</span>
      <Button
        classes={{ root: classes.root }}
        type="button"
        onClick={() => dispatch(removeFilter(id))}
      >
        X
      </Button>
    </div>
  );
}

FilterSetted.propTypes = {
  obj: PropTypes.objectOf(
    PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number],
    ).isRequired,
  ).isRequired,
  id: PropTypes.number.isRequired,
};

export default FilterSetted;
