import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

import InputByName from './InputByName';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import InputByNumber from './InputByNumber';
import FilterButton from './FilterButton';
import SelectedFilters from './SelectedFilters';

function Filters() {
  const  [column, setColumn] = useState('');
  const  [comparison, setComparison] = useState('');
  const  [value, setValue] = useState(0);
  const { filters: { filterByNumericValues } } = useContext(StarWarsContext);

  const renderFilters = () => {
    if (filterByNumericValues.length === 0 || filterByNumericValues[0].column) {
      return <SelectedFilters />;
    }

    return null;
  }

  return (
    <div>
      <InputByName />
      <div className="field is-horizontal">
      <div className="field-body">
        <div className="field is-grouped">
          <SelectColumn updateColumn={setColumn} />
          <SelectComparison updateComparison={setComparison} />
          <InputByNumber updateNumber={setValue} />
        </div>
      </div>
    </div>
      <FilterButton column={column} comparison={comparison} value={value} />
      {renderFilters()}
    </div>
  );
}

export default Filters;
