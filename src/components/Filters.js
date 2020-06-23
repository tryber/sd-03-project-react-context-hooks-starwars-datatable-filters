import React from 'react';
import InputName from './InputName';
import Selectors from './Selectors';
import SortFilters from './SortButtons';
import FiltersList from './FiltersList';


const Filters = () => {
  return (
    <div className="filterBox">
      <InputName />
      <Selectors />
      <SortFilters />
      <FiltersList />
    </div>
  );
}

export default Filters;
