import React, { useState } from 'react';
import proptypes from 'prop-types';

export const FilterContext = React.createContext();

const columns = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

const header = ['name', 'population', 'climate', 'diameter', 'created', 'gravity', 'orbital_period', 'rotation_period',
  'surface_water', 'terrain', 'films', 'edited', 'url'];
const comparisonOptions = ['maior que', 'igual a', 'menor que', ''];

export default function Filters({ children }) {
  const [nameFilter, setNameFilter] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [numericFilter, setNumericFilter] = useState([]);
  const [asc, setAsc] = useState(true);
  const [desc, setDesc] = useState(false);
  const [orderColumn, setOrderColumn] = useState('name');
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });

  function getColumns() {
    const columnsToBeRemoved = numericFilter.map((e) => e.column);
    return ['', ...columns.filter((e) => !columnsToBeRemoved.includes(e))];
  }

  function doFilter() {
    setNumericFilter([...numericFilter, { column, comparison, value }]);
  }

  function doRemoveFilter(e) {
    setNumericFilter(numericFilter.filter((el) => el !== e));
  }

  function doSortColumns(sortColumn, ASC, DESC) {
    if (ASC) setOrder({ column: sortColumn, sort: 'ASC' });
    if (DESC) setOrder({ column: sortColumn, sort: 'DESC' });
  }

  function renderNameFilter() {
    return (
      <label htmlFor="name-filter">
        Buscar por Nome:
        <input
          onChange={(e) => setNameFilter(e.target.value)}
          id="name-filter"
          data-testid="name-filter"
          value={nameFilter}
        />
      </label>
    );
  }

  function renderSelectedFilters() {
    return (numericFilter.map((e) => (
      <div key={e} data-testid="filter">
        <span>{`Coluna: ${e.column}   `}</span>
        <span>{`Coluna: ${e.comparison}   `}</span>
        <span>{`Coluna: ${e.value}`}</span>
        <button type="button" onClick={() => doRemoveFilter(e)}>X</button>
      </div>
    )));
  }

  function renderASCButton() {
    return (
      <label htmlFor="asc">
        <input
          type="radio"
          data-testid="column-sort-input-asc"
          value="ASC"
          id="asc"
          checked={asc}
          onChange={() => {
            setAsc(() => !asc);
            setDesc(() => !desc);
          }}
        />
        ASC
      </label>
    );
  }

  function renderDESCButton() {
    return (
      <label htmlFor="desc">
        <input
          type="radio"
          data-testid="column-sort-input-desc"
          id="desc"
          value="DESC"
          checked={desc}
          onChange={() => {
            setAsc(() => !asc);
            setDesc(() => !desc);
          }}
        />
        DESC
      </label>
    );
  }

  function renderSorter() {
    return (
      <div>
        <div>
          Ordenar por:
          <select
            value={orderColumn}
            data-testid="column-sort"
            onChange={(e) => setOrderColumn(e.target.value)}
          >
            {header.map((e) => <option key={e} value={e}>{e}</option>)}
          </select>
          {renderASCButton()}
          {renderDESCButton()}
          <button
            type="button"
            data-testid="column-sort-button"
            onClick={() => doSortColumns(orderColumn, asc, desc)}
          >
            ordenar
          </button>
        </div>
      </div>
    );
  }

  function renderNumericFilter() {
    return (
      <div>
        Selecionar por Valores
        <select
          value={column}
          data-testid="column-filter"
          onChange={(e) => setColumn(e.target.value)}
        >
          {getColumns().map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <select
          value={comparison}
          data-testid="comparison-filter"
          onChange={(e) => setComparison(e.target.value)}
        >
          {comparisonOptions.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <input
          value={value}
          data-testid="value-filter"
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={() => doFilter()}
        >
          Filtrar
        </button>
      </div>
    );
  }

  const context = { nameFilter, filterByNumericValues: numericFilter, order };

  return (
    <div className="filters">
      {renderNameFilter()}
      {renderNumericFilter()}
      {renderSelectedFilters()}
      {renderSorter()}
      <FilterContext.Provider value={context}>
        {children}
      </FilterContext.Provider>
    </div>
  );
}

Filters.propTypes = {
  children: proptypes.element.isRequired,
};
