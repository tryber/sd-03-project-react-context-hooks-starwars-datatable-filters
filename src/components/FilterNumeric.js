import React, { useContext } from 'react';
import ContextStarWars from '../context/contextStarWars';

function translateStateToArray(state) {
  const finalArray = [];
  state.map((option) => finalArray.push(option.column));
  return finalArray;
}

function FilterNumeric() {
  const {
    SetfilterByNumericValues,
    filters: {
      filterByNumericValues: numericValues,
    },
  } = useContext(ContextStarWars);

  function filterNumbers() {
    const column = document.getElementById('filter');
    const comparation = document.getElementById('comparation');
    const value = document.getElementById('input-value');
    if (column.selectedIndex > 0 && comparation.selectedIndex > 0 && value.value !== '') {
      const SelectionColumn = column.options[column.selectedIndex].value;
      const selectioncomparation = comparation.options[comparation.selectedIndex].value;
      const selectionValue = value.value;
      SetfilterByNumericValues(SelectionColumn, selectioncomparation, selectionValue);
    } else {
      alert('Preencha Todos os campos para filtrar !');
    }
  }
  function filterOptions() {
    const optionList = ['Selecione uma Opção', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const arrayColumState = translateStateToArray(numericValues);
    const filteredOptions = optionList.filter((option) => !arrayColumState.includes(option));
    return filteredOptions;
  }
  const optionListToRender = filterOptions();
  return (
    <div>
      <div>
        <select data-testid="column-filter" id="filter">
          {optionListToRender.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select data-testid="comparison-filter" id="comparation">
          <option value=" ">Selecione Uma Opção </option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input type="number" placeholder="numeros" id="input-value" data-testid="value-filter" />
        <button
          type="button"
          onClick={(e) => filterNumbers(e)}
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default FilterNumeric;
