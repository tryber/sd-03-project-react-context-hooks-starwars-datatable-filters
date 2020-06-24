import React, { useContext } from 'react';
import FiltersContext from '../context/FiltersContext';
// import PropTypes from 'prop-types';
import AllFiltersArrContext from '../context/AllFiltersArrContext';

const Searchbar = () => {
  const { onChangeText, filters } = useContext(FiltersContext);
  const { filterByName: { name } } = filters;
  return (
    <div>
      <label htmlFor="searchbar">
        <input
          data-testid="name-filter"
          type="text"
          onChange={onChangeText}
          id="searchbar"
          name="searchbar"
          value={name}
          placeholder="Digite um nome de planeta"
        />
      </label>
    </div>
  );
};

const NumericSearchCol = () => {
  const { setColumnFunc, column } = useContext(FiltersContext);
  const { allFiltersArr } = useContext(AllFiltersArrContext);
  return (
    <select
      onChange={(e) => setColumnFunc(e.target.value)}
      value={column}
      name="column"
      data-testid="column-filter"
    >
      {allFiltersArr.map((e) => (<option key={e} value={e}>{e}</option>))}
    </select>
  );
};

const NumericSearchGreat = () => {
  const { setComparisonFunc, comparison } = useContext(FiltersContext);
  return (
    <select
      onChange={(e) => setComparisonFunc(e.target.value)}
      value={comparison}
      name="comparison"
      data-testid="comparison-filter"
    >
      <option value="maior que">maior que</option>
      <option value="igual a">igual a</option>
      <option value="menor que">menor que</option>
      <option value="" />
    </select>
  );
};

const NumericSearchValue = () => {
  const { setNumericValueFunc, numericValue } = useContext(FiltersContext);
  return (
    <div>
      <label htmlFor="numericValue">
        <input
          data-testid="value-filter"
          type="number"
          onChange={(e) => setNumericValueFunc(e.target.value)}
          id="numericValue"
          name="value"
          value={numericValue}
          placeholder="Digite um valor númerico"
        />
      </label>
    </div>
  );
};


const NumericFilterButton = () => {
  const {
    column, numericValue, comparison, filters,
    filterByNumericValuesFunc, setColumnFunc, setNumericValueFunc, setComparisonFunc,
  } = useContext(FiltersContext);
  const { filterByNumericValues } = filters;
  const newArr = [...filterByNumericValues, { column, numericValue, comparison }];

  const { allFiltersArr, setAllFiltersFunc } = useContext(AllFiltersArrContext);

  const DisplayFilterName = () => {
    const index = allFiltersArr.indexOf(column);
    const newFiltersArr = [...allFiltersArr];
    newFiltersArr.splice(index, 1);
    setAllFiltersFunc(newFiltersArr);
  };

  const NumericFilter = () => {
    filterByNumericValuesFunc(newArr);
    setColumnFunc('');
    setNumericValueFunc('');
    setComparisonFunc('');
    DisplayFilterName();
  };

  return (
    <button data-testid="button-filter" type="button" onClick={NumericFilter}>
      Search
    </button>
  );
};

const ColToSort = () => {
  const { sortColumn, setSortColumnFunc } = useContext(FiltersContext);
  return (
    <select
      data-testid="column-sort"
      value={sortColumn}
      name="sortColumn"
      onChange={(e) => setSortColumnFunc(e.target.value)}
    >
      <option value="name">name</option>
      <option value="rotation_period">rotation_period</option>
      <option value="orbital_period">orbital_period</option>
      <option value="diameter">diameter</option>
      <option value="gravity">gravity</option>
      <option value="surface_water">surface_water</option>
      <option value="population">population</option>
    </select>
  );
};

const RadioDescAsc = () => {
  const { setSortTypeFunc } = useContext(FiltersContext);
  return (
    <div>
      <label htmlFor="desc">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          value="DESC"
          onClick={() => setSortTypeFunc('DESC')}
          type="radio"
          name="sortType"
          id="desc"
        />
      </label>
      <label htmlFor="asc">
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          value="ASC"
          onClick={() => setSortTypeFunc('ASC')}
          type="radio"
          name="sortType"
          id="asc"
        />
      </label>
    </div>
  );
};

const SortButton = () => {
  const { sortColumn, sortType, setOrderFunc } = useContext(FiltersContext);
  const newObj = { column: sortColumn, sort: sortType };
  return (
    <button data-testid="column-sort-button" type="button" onClick={() => setOrderFunc(newObj)}>
      Sort Table
    </button>
  );
};

const Inputs = () => (
  <div>
    <div>
      {Searchbar()}
      {NumericSearchCol()}
      {NumericSearchGreat()}
      {NumericSearchValue()}
      {NumericFilterButton()}
    </div>
    <div>
      {ColToSort()}
      {RadioDescAsc()}
      {SortButton()}
    </div>
  </div>
);

export default Inputs;

// Inputs.propTypes = {
//   typedText: PropTypes.string,
//   allFiltersArr: PropTypes.arrayOf(PropTypes.string).isRequired,
//   filterByName: PropTypes.func,
//   changeFiltersDisplay: PropTypes.func,
//   filterByNumericValues: PropTypes.func,
//   choosedCol: PropTypes.func,
// };

// Inputs.defaultProps = {
//   typedText: '',
//   filterByName: () => {},
//   filterByNumericValues: () => {},
//   changeFiltersDisplay: () => {},
//   choosedCol: () => {},
// };
