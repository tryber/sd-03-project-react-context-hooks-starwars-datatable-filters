import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function filteredOptions({filterByNumericValues}) {
  const options = [
    { value: '', text: '' },
    { value: 'population', text: 'population' },
    { value: 'orbital_period', text: 'orbital period' },
    { value: 'diameter', text: 'diameter' },
    { value: 'rotation_period', text: 'rotation period' },
    { value: 'surface_water', text: 'surface water' },
  ];
  if (filterByNumericValues.length === 0) {
    return options;
  }
  let optionsParam = [...options];
  let newOptions = [];
  filterByNumericValues.forEach((item) => {
    newOptions = optionsParam.filter((option) => option.value !== item.column);
    optionsParam = newOptions;
  });
  return newOptions;
}

function inputNamePlanet({setNameFunc}) {
  return (
    <label htmlFor="namePlanet">
      Nome do Planeta:
      <input
        data-testid="name-filter"
        name="namePlanet"
        type="text"
        onChange={(event) => setNameFunc(event.target.value)}
      />
    </label>
  );
}

function selectFilter(optionsParam, setColumn) {
  return (
    <select
      data-testid="column-filter"
      onChange={(event) => setColumn(event.target.value)}
    >
      {
        optionsParam.map((item) =>
          <option
            key={item.value}
            value={item.value}
          >
            {item.text}
          </option>)
      }
    </select>
  );
}

function selectComparison(setComparison) {
  return (
    <select
      data-testid="comparison-filter"
      onChange={(event) => setComparison(event.target.value)}
    >
      <option value="" />
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  );
}

function valueFilterInput(setValue) {
  return (
    <label htmlFor="valueFilter">
      Valor:
      <input
        data-testid="value-filter"
        name="valueFilter"
        type="number"
        onChange={(event) => setValue(event.target.value)}
      />
    </label>
  );
}

function buttonFilter(column, comparison, value, {setFilterByNumericValuesFunc}) {
  const filters = {
    column,
    comparison,
    value,
  };
  let isDisabled = true;
  if (column && comparison && value) isDisabled = false;
  return (
    <div>
      <button
        disabled={isDisabled}
        data-testid="button-filter"
        onClick={() => setFilterByNumericValuesFunc(filters)}
      >
        Filtrar
      </button>
    </div>
  );
}

function removeFilter(option, filters) {
  const newFilters = filters.filter((item) => item.column !== option);
  return newFilters;
}

function filteredList({filterByNumericValues, removeFilterByNumericValues}) {
  return (
    <div>
      {
        filterByNumericValues.map((item) =>
          <div
            data-testid="filter"
            key={item.column}
          >
            {item.column}
            <button
              value={item.column}
              onClick={(event) =>
                removeFilterByNumericValues(removeFilter(event.target.value, filterByNumericValues))}
            >
              X
            </button>
          </div>)}
    </div>
  );
}

function Inputs() {
  const context = React.useContext(StarWarsContext);
  const [column, setColumn] = React.useState('');
  const [comparison, setComparison] = React.useState('');
  const [value, setValue] = React.useState('');

  return (
    <div>
      {inputNamePlanet(context)}
      {selectFilter(filteredOptions(context), setColumn)}
      {selectComparison(setComparison)}
      {valueFilterInput(setValue)}
      {buttonFilter(column, comparison, value, context)}
      {filteredList(context)}
    </div>
  );
}

export default Inputs;
