import React, { useContext, useState } from 'react';
import FilterValue from './FilterValue';
import { StarContext } from './Context';
import { getRadios } from './getSelects';

function Input() {

  const [text, setText] = useState('');
  const [columnSort, setColumnSort] = useState('Name');
  const [inputSort, setInputSort] = useState('ASC');
  const { filterByName, orderColumns } = useContext(StarContext);

  const onTextChange = (event) => {
    setText(event.target.value);
    filterByName(event.target.value);
  };

  const onInputChange = (event) => setInputSort(event.target.value);
  const onColumnChange = (event) => setColumnSort(event.target.value);
  const onClick = () => orderColumns(columnSort, inputSort);

  const getColumns = () => {
    const columns = [
      'Name',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];

    return (
        <select
          onChange={(event) => onColumnChange(event)}
          data-testid="column-sort"
          value={columnSort}
        >
          {columns.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
    );
  };

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={text}
        placeholder="Faça uma pesquisa"
        onChange={(event) => onTextChange(event)}
      />
      <FilterValue />
      {getColumns()}
      {getRadios(onInputChange)}
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={onClick}
      >
        Ordenar
        </button>
    </div>
  );
}

export default Input;
