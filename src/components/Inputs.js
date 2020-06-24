import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

const options = [
  { value: '', text: '' },
  { value: 'population', text: 'population' },
  { value: 'orbital_period', text: 'orbital_period' },
  { value: 'diameter', text: 'diameter' },
  { value: 'rotation_period', text: 'rotation_period' },
  { value: 'surface_water', text: 'surface_water' },
];

function inputNamePlanet(context) {
  return (
    <label htmlFor="namePlanet">
      Nome do Planeta:
      <input
        data-testid="name-filter"
        name="namePlanet"
        type="text"
        onChange={(event) => context.setNameFunc(event.target.value)}
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

function buttonFilter(column, comparison, value, context) {
  const filters = {
    column,
    comparison,
    value,
  };
  return (
    <div>
      <button
        data-testid="button-filter"
        onClick={() => context.setFilterByNumericValuesFunc(filters)}
      >
        Filtrar
      </button>
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
      {selectFilter(options, setColumn)}
      {selectComparison(setComparison)}
      {valueFilterInput(setValue)}
      {buttonFilter(column, comparison, value, context)}
    </div>
  );
}

export default Inputs;
