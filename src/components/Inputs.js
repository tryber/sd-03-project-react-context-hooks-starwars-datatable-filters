import React, { useState, useContext } from 'react';
import FiltersContext from '../context/FiltersContext';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AllFiltersArrContext from '../context/AllFiltersArrContext';
// import { filterByNameAction } from '../actions/filterByNameAction';
// import { filtersNameAction } from '../actions/filtersNameAction';
// import { filterByNumericValuesAction } from '../actions/filterByNumericValuesAction';
// import { choosedColToSortAction } from '../actions/choosedColToSortAction';

const Inputs = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     column: 'all',
  //     comparison: '',
  //     value: '',
  //     sortType: '',
  //     sortColumn: '',
  //   };
  //   this.onChangeText = this.onChangeText.bind(this);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.numericFilter = this.numericFilter.bind(this);
  // }

  // const [column, setColumn] = useState('all');
  // const [comparison, setComparison] = useState('');
  // const [value, setValue] = useState('');
  // const [sortType, setSortType] = useState('');
  // const [sortColumn, setSortColumn] = useState('');
  const [sortType, setSortType] = useState('ASC');
  const [sortColumn, setSortColumn] = useState('Name');
  const setSortColumnFunc = (columnSelected) => setSortColumn(columnSelected);
  const setSortTypeFunc = (type) => setSortType(type);
  // const onChangeText = (event) => {
  //   const { value } = event.target;
  //   const { filterByName } = this.props;
  //   filterByName(value);
  // }
  const {
    onChangeText, filters, setColumnFunc, column, setComparisonFunc,
    comparison, setNumericValueFunc, numericValue, filterByNumericValuesFunc, setOrderFunc,
    // setSortColumnFunc, setSortTypeFunc,
  } = useContext(FiltersContext);
  const { filterByName: { name }, filterByNumericValues, order } = filters;
  const { allFiltersArr, setAllFiltersFunc } = useContext(AllFiltersArrContext);

  // const handleChange = (event) => {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value });
  // }

  const searchbar = () => {
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

  const numericSearchCol = () => {
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

  const numericSearchGreat = () => {
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

  const numericSearchValue = () => {
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

  const displayFilterName = () => {
    const index = allFiltersArr.indexOf(column);
    const newArr = [...allFiltersArr];
    newArr.splice(index, 1);
    setAllFiltersFunc(newArr);
  };

  const numericFilter = () => {
    const newArr = [...filterByNumericValues, { column, numericValue, comparison }];
    filterByNumericValuesFunc(newArr);
    setColumnFunc('');
    setNumericValueFunc('');
    setComparisonFunc('');
    displayFilterName();
  };

  const numericFilterButton = () => {
    return (
      <button data-testid="button-filter" type="button" onClick={numericFilter}>
        Search
      </button>
    );
  };

  const colToSort = () => {
    // const { sortColumn } = this.state;
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

  const radioDescAsc = () => {
    return (
      <div>
        <label htmlFor="desc">
          Descendente
          <input
            data-testid="column-sort-input"
            value="DESC"
            onClick={() => setSortTypeFunc("DESC")}
            type="radio"
            name="sortType"
            id="desc"
          />
        </label>
        <label htmlFor="asc">
          Ascendente
          <input
            data-testid="column-sort-input"
            value="ASC"
            onClick={() => setSortTypeFunc("ASC")}
            type="radio"
            name="sortType"
            id="asc"
          />
        </label>
      </div>
    );
  };

  const sortButton = () => {
    const newObj = { column: sortColumn, sort: sortType };
    return (
      <button data-testid="column-sort-button" type="button" onClick={() => setOrderFunc(newObj)}>
        Sort Table
      </button>
    );
  };

  return (
    <div>
      <div>
        {searchbar()}
        {numericSearchCol()}
        {numericSearchGreat()}
        {numericSearchValue()}
        {numericFilterButton()}
      </div>
      <div>
        {colToSort()}
        {radioDescAsc()}
        {sortButton()}
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   filterByName: (text) => dispatch(filterByNameAction(text)),
//   filterByNumericValues: (obj) => dispatch(filterByNumericValuesAction(obj)),
//   changeFiltersDisplay: (arr) => dispatch(filtersNameAction(arr)),
//   choosedCol: (obj) => dispatch(choosedColToSortAction(obj)),
// });

// const mapStateToProps = (state) => ({
//   dataSw: state.apiSWReducer.data,
//   isLoading: state.apiSWReducer.loading,
//   typedText: state.filters.filterByName.name,
//   numericSearched: state.filters.filterByNumericValues,
//   allFiltersArr: state.filtersArrReducer.allFilters,
// });

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
