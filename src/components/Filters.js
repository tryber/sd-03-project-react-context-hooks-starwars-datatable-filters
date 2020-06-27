import React, {  useState, useContext } from 'react';
import { MyContext } from '../context/context';

const renderOptions = (array, state) => {
  return (
    array.map(function (e) {
      return (state.includes(e)) ? false : <option>{e}</option>;
    })
  );
}

const handle = (event, func) => {
  func( event.target.value );
}
const Filters = () => {
  const {
    numericValues, setNumericValues, setNameFilters, usedFilters, setUsedFilters 
  } = useContext(MyContext);
  const [columnSelector, setColumnSelector] = useState('population');
  const [comparisonSelector, setComparisonSelector] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);


  const btn = () => {
    setNumericValues([...numericValues, { 
      column: columnSelector, comparison: comparisonSelector, value: valueFilter 
    }]);
    setUsedFilters([...usedFilters, columnSelector]);
  }
  const colArray = ['select', 'population', 'orbital_period','diameter', 'rotation_period', 'surface_water'];
  const compArray = ['select', 'maior que', 'menor que', 'igual a'];
  return (
    <div className="filters">
      <label htmlFor="name-in">Filtrar por nome</label>
      <input id="name-in" data-testid="name-filter" type="text" onChange={(e) => setNameFilters({ name: e.target.value})} />
      <select
        data-testid="column-filter"
        onChange={(e) => handle(e, setColumnSelector)}
      >
        {renderOptions(colArray, usedFilters)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={(e) => handle(e,setComparisonSelector)}
      >
        {renderOptions(compArray, usedFilters)}
      </select>
      <input
        data-testid="value-filter" type="number"
        onChange={(e) => handle(e, setValueFilter)}
      />
      <button type="button" data-testid="button-filter" onClick={() => btn()}>Filtro</button>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   hdlQry: (event) => dispatch(queryByName(event.target.value)),
//   handleFilterBtn: (column, comparison, value) => dispatch(saveFilters(column, comparison, value)),
// });

// const mapStateToProps = (state) => ({
//   okFilters: state.filters.usedFilters,
// });

export default Filters;
