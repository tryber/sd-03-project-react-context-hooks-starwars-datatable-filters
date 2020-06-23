import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const ColumnSelector = ({ setColumn }) => {
  const { filterByNumericValues } = useContext(StarWarsContext);
  const columns = ['rotational_period', 'orbital_period', 'diameter', 'surface_water', 'population'];
  const selectedColumn = filterByNumericValues.map((item) => (
    item ? item.column : false));
  return (
    <div>
      <span>Choose a column:</span>
      <select
        name="column"
        data-testid="column-filter"
        onChange={({ target: { value } }) => setColumn(value)}
        required
      >
        <option value="" label="" />
        {columns.map((column) => (
          selectedColumn.includes(column)
            ? false
            : <option value={column} key={column}>{column.replace('_', ' ')}</option>
        ))}
      </select>
    </div>
  );
}

export default ColumnSelector;
