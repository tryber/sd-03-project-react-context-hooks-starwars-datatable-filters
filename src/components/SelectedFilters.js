import React, { useContext } from 'react';
import FiltersContext from '../context/FiltersContext';
import AllFiltersArrContext from '../context/AllFiltersArrContext';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { filtersNameAction } from '../actions/filtersNameAction';
// import { removeFilterDisplayAction } from '../actions/removeFilterDisplayAction';

const SelectedFilters = () => {
  // const {
  //   numericSearched,
  //   allFiltersArr,
  //   changeFiltersDisplay,
  //   removeFilterDisplay,
  // } = props;
  const {
    filters: { filterByNumericValues }, filterByNumericValuesFunc,
  } = useContext(FiltersContext);

  const { setAllFiltersFunc, allFiltersArr } = useContext(AllFiltersArrContext);

  const displayFilterName = (column) => {
    const newArr = [...allFiltersArr];
    newArr.push(column);
    setAllFiltersFunc(newArr);
  };

  const displaySearches = (column, arrSearches) => {
    const newArr = [...arrSearches].filter((e) => e.column !== column);
    filterByNumericValuesFunc(newArr);
  };

  if (filterByNumericValues.length === 0) return <div />;
  return (
    <div data-testid="filter">
      {filterByNumericValues.map((e) => (
        <div key={e.column}>
          <div>{e.column}</div>
          <div>{e.comparison}</div>
          <div>{e.numericValue}</div>
          <button
            type="button"
            onClick={() => {
              displayFilterName(e.column);
              displaySearches(e.column, filterByNumericValues);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   numericSearched: state.filters.filterByNumericValues,
//   allFiltersArr: state.filtersArrReducer.allFilters,
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeFiltersDisplay: (arr) => dispatch(filtersNameAction(arr)),
//   removeFilterDisplay: (arr) => dispatch(removeFilterDisplayAction(arr)),
// });

export default SelectedFilters;

// SelectedFilters.propTypes = {
//   numericSearched: PropTypes.arrayOf(PropTypes.any),
//   allFiltersArr: PropTypes.arrayOf(PropTypes.string).isRequired,
//   changeFiltersDisplay: PropTypes.func,
//   removeFilterDisplay: PropTypes.func,
// };

// SelectedFilters.defaultProps = {
//   numericSearched: [],
//   changeFiltersDisplay: () => {},
//   removeFilterDisplay: () => {},
// };
