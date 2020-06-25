import React, { useState } from 'react';
import useContextAPIPlanets from '../hooks/useContextAPIPlanets';
import NameFilterfunc from './NameFilterfunc';
import Header from './Header';

const Table = () => {
  const planetsAPIreq = useContextAPIPlanets('');
  const [text, setText] = useState('');
  const [columnFilter, setColumnFilter] = useState('');
  const [comparisonFilter, setComparisonFilter] = useState('');
  const [valueFilter, setValueFilter] = useState(0);
  const dropDownColumnFilter = [' ', 'population', 'orbital_period', 'diameter', 'rotation_period' , 'surface_water'];
  const dropDownComparisonFilter = [' ', 'maior que', 'menor que' , 'igual a'];

  const onInputValueChange = (event) => {
    switch (comparisonFilter) {
      case 'maior que':
        return event.filter((el) => Number(el[columnFilter]) > valueFilter);
      case 'menor que':
        return event.filter((el) => Number(el[columnFilter]) < valueFilter);
      case 'igual a':
        return event.filter((el) => Number(el[columnFilter]) === valueFilter);
      default:
        return event;
    }
  };

  const onTextChange = (event) => setText(event.target.value);

  const selectOption = (datatest, funcToChange, dropDown) => <select
    data-testid={datatest}
    onChange={(e) => funcToChange(e.target.value)}
  >
    {dropDown.map((el) => <option>{el}</option>)}
  </select>;

  const inputAndButtonToFilter = () => <div>
    <input
      type="number"
      data-testid="value-filter"
      placeholder="Digite um Numero"
      onChange={(e) => setValueFilter(Number(e.target.value))}
    />
    <button data-testid="button-filter" > Filtrar </button>
  </div>;

  return (typeof planetsAPIreq === 'object' &&
  <div>
    <input
      data-testid="name-filter"
      placeholder="Digite o nome de um planeta..."
      type="text"
      value={text}
      onChange={(e) => onTextChange(e)}
    />
    {selectOption('column-filter', setColumnFilter, dropDownColumnFilter)}
    {selectOption('comparison-filter', setComparisonFilter, dropDownComparisonFilter)}
    {inputAndButtonToFilter(setValueFilter)}
    <table>
      <Header />
      {NameFilterfunc(onInputValueChange(planetsAPIreq.results), text)}
    </table>
  </div>);
};

export default Table;
