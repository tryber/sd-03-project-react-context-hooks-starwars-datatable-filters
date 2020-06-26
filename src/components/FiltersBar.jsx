import React, { useContext } from 'react';

import { Button } from '@material-ui/core';
import SearchBox from './SearchBox';
import NumFilter from './NumFilter';
import FilterSetted from './FilterSetted';
import OrderFilters from './OrderFilters';

import { filtersContext } from '../context/Filters';
import { formatContext } from '../context/Format';
import { numericColumn } from '../services/constants';
import ButtonStyle from '../styles/Button';
import './FiltersBar.css';

const takeUnused = (completeList, usedListOfObj) => (
  completeList.filter((option) => (
    usedListOfObj.every(({ column }) => column !== option)
  ))
);

function FilterBar() {
  const classes = ButtonStyle();
  const [{ filterByNumericValues }] = useContext(filtersContext);
  const [isMultiHeader, setIMultiHeader] = useContext(formatContext);

  return (
    <section className="filter-bar">
      <h2 className="container"><span>Filters</span></h2>
      <div className="filters">
        <SearchBox />
        <NumFilter columnOptions={takeUnused(numericColumn, filterByNumericValues)} />
        <OrderFilters />
      </div>
      <div>
        {filterByNumericValues.map((obj, id) => (
          <FilterSetted id={id} key={obj.column} obj={obj} />
        ))}
      </div>
      <div>
        <Button
          classes={{ root: classes.root, label: classes.label }}
          color="primary"
          onClick={() => setIMultiHeader(!isMultiHeader)}
        >
          Change Table Format
        </Button>
      </div>
    </section>
  );
}

export default FilterBar;
