import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export const columnFilter = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const FilterSelector = () => {
  const [state, setState] = useState({
    column: '',
    comparison: '',
    value: '0',
  });
  const handleFilterChange = (e, field) => {
    setState((prevState) => ({
      ...prevState,
      [field]: e,
    }));
  };
  const { filters, submitNumericFilter } = useContext(StarWarsContext);
  return (
    <div>
      <select required onChange={(event) => handleFilterChange(event.target.value, 'column')} data-testid="column-filter">
        <option />
        {columnFilter.map(
          (option) => !filters.filterByNumericValues.find(({ column }) => column === option) && (
          <option key={option}>{option}</option>
          ),
        )}
      </select>
      <select
        required
        onChange={(event) => handleFilterChange(event.target.value, 'comparison')}
        data-testid="comparison-filter"
      >
        <option />
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        defaultValue="0"
        onChange={(event) => handleFilterChange(event.target.value, 'value')}
        data-testid="value-filter"
        type="number"
      />
      <button onClick={() => submitNumericFilter(state)} type="button" data-testid="button-filter">
        Add filter
      </button>
    </div>
  );
};

export default FilterSelector;
