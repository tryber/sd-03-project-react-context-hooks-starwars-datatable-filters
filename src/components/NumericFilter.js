import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columnOptions = [
  'select column',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonOptions = [
  'select',
  'maior que',
  'igual a',
  'menor que',
];

let newColumnOptions = [...columnOptions];

let showFilter = true;

const verifyColumns = (obj) => {
  if (obj.length > 1) {
    showFilter = true;
  } else {
    showFilter = false;
  }
};


const NumericFilter = () => {

  const { filters } = useContext(StarWarsContext);
  const { filterByNumericValues } = filters;

  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(0);
  
  const handleChange = (type, value) => {
    if (type === 'column') { setColumn(value); }
    if (type === 'comparison') { setComparison(value); }
    if (type === 'value') { setValue(value); }
  }

  const filterMenu = () => {
    // Thanks for topic
    // https://stackoverflow.com/
    // questions/14515382/javascript-compare-two-arrays-return-differences-but
    const filterColumnArray = filterByNumericValues.map(({ column }) => column);
    newColumnOptions = [...columnOptions];
    let index;
    for (let i = 0; i < filterColumnArray.length; i += 1) {
      index = newColumnOptions.indexOf(filterColumnArray[i]);
      if (index > -1) {
        newColumnOptions.splice(index, 1);
      }
    }
  }

  const filterForms = () => {
    // const { filters } = useContext(StarWarsContext);
    // const { getPlanetByNumericValues } = filters;
    return (
      <div>
        <label htmlFor="column-filter">Filtre por coluna</label>
        <select
          data-testid="column-filter" name="column-filter"
          onChange={(e) => handleChange('column', e.target.value)}
        >
          {newColumnOptions.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <label htmlFor="comparison-filter">Condição</label>
        <select
          data-testid="comparison-filter" name="comparison-filter"
          onChange={(e) => handleChange('comparison', e.target.value)}
        >
          {comparisonOptions.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
        <label htmlFor="value-filter">Valor</label>
        <input
          data-testid="value-filter" type="number" maxLength="12"
          onChange={(e) => handleChange('value', e.target.value)}
        />
        <button
          data-testid="button-filter" onClick={() => console.log('Fui clickado')}
        >Filtrar</button>
      </div>
    );
  }
  
  filterMenu();
  verifyColumns(columnOptions);
  return (
    <div>
      {showFilter && filterForms()}
    </div>
  );
}

export default NumericFilter;
