import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function Filter({ column, comparison, value }) {
  const { changeNumericFilter } = useContext(StarWarsContext);

  function deleteFilter() {
    changeNumericFilter('del', { column });
  }

  return (

    <div data-testid="filter">
      <span>{column}</span>
      <span>{comparison}</span>
      <span>{value}</span>
      <button onClick={deleteFilter} type="button">X</button>
    </div>
  );
}

Filter.propTypes = {
  column: PropTypes.string.isRequired,
  comparison: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
