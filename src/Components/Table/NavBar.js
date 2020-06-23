import React, { useContext, useState } from 'react';
import APIcontext from '../Context/APIcontext';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisons = ['', 'maior que', 'igual a', 'menor que'];

function filterColumn(valueFilter, option) {
  return !valueFilter.find(({ column }) => column === option);
}

function sideBar(handleChangeInput) {
  return (
    <header className="header">
      <nav className="menu">
        <select
          data-testid="column-filter"
          name="column"
          onChange={(e) => handleChangeInput('column', e.target.value)}
        >
          <option value="" />
          {columns.map((column) => (filterColumn(columns, column)
            && (
              <option key={column}>{column}</option>
            )
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          name="comparison"
          onChange={(e) => handleChangeInput('comparison', e.target.value)}
        >
          {comparisons.map((comparison) => <option key={comparison}>{comparison}</option>)}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          name="value"
          onChange={(e) => handleChangeInput('value', e.target.value)}
        />
      </nav>
    </header>
  );
}

function NavBar() {
  const { saveFilter, filterSelect } = useContext(APIcontext);
  const [list, setList] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    saveFilter((filterSelect.filters.filterByNumericValues[0].column === '')
    ? list : list);
  };

  const handleChangeInput = (name, ele) => {
    setList({
      ...list,
      [name]: ele,
    });
  };

  return (
    <div>
      {sideBar(handleChangeInput)}
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={handleFormSubmit}
        >
          Filtrar
      </button>
      </div>
    </div>
  );
}

export default NavBar;
