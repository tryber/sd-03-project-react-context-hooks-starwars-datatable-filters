import React, { useContext, useState } from 'react';
import { FilterContext } from '../context/filterProvider';

const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const renderSelectCol = (evtHandler, numericFilter) => (
  <select
    name="column"
    data-testid="column-filter"
    onChange={(evt) => evtHandler(evt)}
  >
    <option key="1" value="" />
    { columns.map((column) => (!numericFilter.find(
      (filter) => filter.column === column)) && (
        <option key={column} value={column}>{column}</option>
        ),
        )}
  </select>
);

const renderSelectComp = (evtHandler) => (
  <select
    name="comparison"
    data-testid="comparison-filter"
    onChange={(evt) => evtHandler(evt)}
  >
    <option />
    <option key=">" value="maior que">maior que</option>
    <option key="=" value="igual a">igual a</option>
    <option key="<" value="menor que">menor que</option>
  </select>
);

const numericFilterPanel = (evtHandler, filterByNumericValues) => (
  <div>
    <label htmlFor="column-filter">Filtrar por outros:</label>
    {renderSelectCol(evtHandler, filterByNumericValues)}
    {renderSelectComp(evtHandler)}
    <input
      name="value"
      type="number"
      maxLength="15"
      data-testid="value-filter"
      onChange={(evt) => evtHandler(evt)}
    />
  </div>
);

// Estava o numericFilter do state
 function filtersList(numericFilters, rmFilter) {
  return (numericFilters.map((filter) => (
    <div
      key={filter.column}
      data-testid="filter"
    >
      {filter.column} {filter.comparison} {filter.value}
      <button
        onClick={() => { rmFilter(filter); }}
      >
      X</button>
    </div>
  )));
};

function SearchBar() {
  const {
    filter: { filterByNumericValues },
    setNameFilter,
    addNumericFilter,
    removeNumericFilter,
  } = useContext(FilterContext);

  // Hook de estado - substituto ao state dos componentes de classe
  const [state, setState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const evtHandler = (evt) => {
    setState({
      ...state, [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="filterBar">
      <div className="filterPanel">
        <label htmlFor="name-filter">Filtrar por nome</label>
        <input
          data-testid="name-filter"
          name="inputFilter"
          onChange={(e) => { setNameFilter(e.target.value.toLowerCase()); }}
        />
        {numericFilterPanel(evtHandler, filterByNumericValues)}
        <button
          data-testid="button-filter"
          onClick={() => { addNumericFilter(state); }}
        >
        Adicionar filtro
        </button>
      </div>
      <div className="filterList">
        {filtersList(filterByNumericValues, removeNumericFilter)}
      </div>
    </div>
  );
}

export default SearchBar;
