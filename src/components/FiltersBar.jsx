import React, { useContext } from 'react';

import SearchBox from './SearchBox';
import NumFilter from './NumFilter';
import FilterSetted from './FilterSetted';
// import OrderFilters from './OrderFilters';

import { filtersContext } from '../context/Filters';
// import { changeTable } from '../actions/changeTableActions';
import * as constants from '../services/constants';
import './FiltersBar.css';

const takeUnused = (completeList, usedListOfObj) => (
  completeList.filter((option) => (
    usedListOfObj.every(({ column }) => column !== option)
  ))
);

/* <button
className="radius-border filter-button"
type="button"
onClick={() => changeTableFormat(!isClassicFormatTable)}
>
  Change Table Format
</button>*/

function FilterBar(
  // { numFilters, changeTableFormat, isClassicFormatTable }
) {
  const [{
    filterByNumericValues,
  }, dispatch] = useContext(filtersContext);
  return (
    <section className="filter-bar">
      <div className="filters">
        <SearchBox />
        <NumFilter columnOptions={takeUnused(constants.numColumn, filterByNumericValues)} />
        {/* <OrderFilters /> */}
      </div>
      <div>
        {filterByNumericValues.map(({ column, comparison, value }, id) => (
          <FilterSetted
            id={id}
            key={column}
            column={column}
            comparison={comparison}
            value={value}
          />
        ))}
      </div>
    </section>
  );
}

// const mapStateToProps = ({ filters: { filterByNumericValues }, format }) => ({
//   numFilters: [...filterByNumericValues],
//   isClassicFormatTable: format,
// });

// const mapDispatchToProps = (dispatch) => ({
//   changeTableFormat: (isClassic) => dispatch(changeTable(isClassic)),
// });

// FilterBar.propTypes = {
//   numFilters: PropTypes.arrayOf(
//     PropTypes.objectOf(PropTypes.string.isRequired),
//   ).isRequired,
//   isClassicFormatTable: PropTypes.bool,
//   changeTableFormat: PropTypes.func.isRequired,
// };

// FilterBar.defaultProps = { isClassicFormatTable: false };

export default FilterBar;
