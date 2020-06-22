import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterValue() {
  const [number, setNumber] = useState('');
  const [column, setColumn] = useState('');
  const [comparation, setComparation] = useState('');
  const { filterByNumericValues,
    filters: { filterByNumericValues: numericValues }
  } = useContext(StarWarsContext)


  useEffect(() => {
    updateColumn();
  }, []);

  const onNumberChange = (event) => setNumber(event.target.value);
  const onColumnChange = (event) => setColumn(event.target.value);
  const onComparationChange = (event) => setComparation(event.target.value);

  const onClick = () => {
    filterByNumericValues(column, comparation, number);
    setNumber('');
    setColumn('');
    setComparation('');
  };

  const getColumns = () => {
    const select = updateColumn();
    return (
      <select
        onChange={(event) => onColumnChange(event)}
        data-testid="column-filter"
        value={column}
      >
        {select.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  const getComparation = () => {
    const comparation = ['', 'maior que', 'menor que', 'igual a'];
    return (
      <select
        onChange={(event) => onComparationChange(event)}
        data-testid="comparison-filter"
        value={comparation}
      >
        {comparation.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  const updateColumn = () => {
    const columns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    const stateColumns = numericValues.map(({ column }) => column);
    return [
      '',
      ...columns.filter((option) => !stateColumns.includes(option)),
    ];
  };

  return (
    <div>
      {getColumns()}
      {getComparation()}
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
