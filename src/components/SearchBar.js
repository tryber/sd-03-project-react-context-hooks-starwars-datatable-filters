import React, { useState, useContext } from 'react';
import NameFilter from './NameFilter';
import FilterList from './FilterList';
import { StarWarsContext } from './StarWarsContext';

function SearchBar() {
  const [columnC, setcolumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const columnsArray = ['', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonArray = ['', 'maior que', 'igual a', 'menor que'];
  const {
    updateNumericFilters,
    filters: {
      filterByNumericValues: numericFilters,
    },
  } = useContext(StarWarsContext);

  const handleClick = () => {
    const searchFilters = { column: columnC, comparison, value };
    updateNumericFilters(searchFilters);
  };

  const filterOptions = (filters, columnV) => !filters.find(({ column }) => column === columnV);

  return (
    <div className="filters-div">
      <NameFilter />
      <select
        id="column-filter"
        data-testid="column-filter"
        onChange={(event) => setcolumn(event.target.value)}
      >
        {columnsArray.map((column) => (filterOptions(numericFilters, column) &&
          (<option value={column} key={column}>{column}</option>)
        ))}
      </select>
      <select
        onChange={(event) => setComparison(event.target.value)}
        data-testid="comparison-filter"
      >
        {comparisonArray.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={(event) => setValue(event.target.value)}
      />
      <button data-testid="button-filter" onClick={handleClick}>Filter</button>
      <FilterList />
    </div>
  );
}

export default SearchBar;