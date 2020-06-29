import React, { useContext, useState } from 'react';
import contextAPI from '../context/contextAPI';

const comparisons = ['', 'maior que', 'igual a', 'menor que'];

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function columnFilter(filterValue, option) {
  return !filterValue.find(({ column }) => column === option);
}

const sideBar = (handleChange) => (
  <header>
    <nav>
      <select
        data-testid="column-filter"
        onChange={(elem) => handleChange('column', elem.target.value)}
      >
        <option value="" />
        {columns.map((column) => (columnFilter(columns, column)
          && (<option key={column}>{column}</option>)
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(elem) => handleChange('comparison', elem.target.value)}
      >
        {comparisons.map((comparison) => (
          <option key={comparison}>{comparison}</option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={(elem) => handleChange('value', elem.target.value)}
      />
    </nav>
  </header>
);

function NavigationBar() {
  const { changeFilterNumeric } = useContext(contextAPI);
  const [filterList, setFilterList] = useState();

  const handleChange = (name, value) => {
    setFilterList({
      ...filterList,
      [name]: value,
    });
  };

  const selectImput = () => {
    changeFilterNumeric(filterList, 'add');
  };

  return (
    <div>
      {sideBar(handleChange)}
      <div>
        <button
          type="button"
          data-testid="button-filter"
          onClick={selectImput}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
