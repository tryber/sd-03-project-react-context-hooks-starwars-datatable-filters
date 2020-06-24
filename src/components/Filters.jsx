import React, { useState } from 'react';

import InputByName from './InputByName';
import SelectColumn from './SelectColumn';
import SelectComparison from './SelectComparison';
import InputByNumber from './InputByNumber';
import FilterButton from './FilterButton';

function Filters() {
  const  [column, setColumn] = useState('');
  const  [comparison, setComparison] = useState('');
  const  [value, setValue] = useState(0);
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
    </div>
  );
}

export default Filters;
