import React, { useContext, useEffect, useState } from 'react';
import { StarContext } from './Context';
import updateColumn from './updateColumn';
import { getColumns, getComparison } from './getSelects';

function FilterValue() {
    const [number, setNumber] = useState('');
    const [column, setColumn] = useState('');
    const [comparison, setComparison] = useState('');
    const { filterByNumericValues,
      filters: { filterByNumericValues: numericValues },
    } = useContext(StarContext);
  
    useEffect(() => {
      updateColumn(numericValues);
    }, [numericValues]);
  
    const onNumberChange = (event) => setNumber(event.target.value);
    const onColumnChange = (event) => setColumn(event.target.value);
    const onComparisonChange = (event) => setComparison(event.target.value);
  
    const onClick = () => {
      filterByNumericValues(column, comparison, number);
      setNumber('');
      setColumn('');
      setComparison('');
    };
  
    return (
      <div>
        {getColumns(onColumnChange, numericValues, column)}
        {getComparison(onComparisonChange, comparison)}
        <input
          type="number"
          data-testid="value-filter"
          value={number}
          onChange={(event) => onNumberChange(event)}
        />
        <button data-testid="button-filter" onClick={onClick}>
          Filtrar
          </button>
      </div>
    );
}

export default FilterValue;

