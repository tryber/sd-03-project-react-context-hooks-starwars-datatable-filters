import React, {
  useContext, useState,
} from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SortFilters from './SortFilters';
import './Filters.css';

const renderInputName = (dispatch, filterNames) => (
  <div>
    <input
      data-testid="name-filter"
      type="text"
      onChange={(e) => dispatch(filterNames(e.target.value))}
    />
  </div>
);

const renderOptionsFilter = (handleChange, options) => (
  <div>
    <select data-testid="column-filter" name="column" onChange={(e) => handleChange(e)}>
      <option value="" />
      {options.map((column) => (
        <option value={column} key={column}>
          {column}
        </option>
      ))}
    </select>
  </div>
);

const renderComparisonFilter = (handleChange) => (
  <div>
    <select data-testid="comparison-filter" name="comparison" onChange={(e) => handleChange(e)}>
      <option value="" />
      <option value="maior que">maior que</option>
      <option value="menor que">menor que</option>
      <option value="igual a">igual a</option>
    </select>
  </div>
);

const renderValueFilter = (handleChange, value) => (
  <div>
    <input
      data-testid="value-filter"
      type="number"
      name="value"
      onChange={(e) => handleChange(e)}
      value={value}
    />
  </div>
);

const renderSubmitButton = (handleSubmit) => (
  <button data-testid="button-filter" type="button" onClick={() => handleSubmit()}>
    Adicionar Filtro
  </button>
);

const renderActiveFilters = (filterByNumericValues, handleRemove) => {
  if (filterByNumericValues.length === 0 || filterByNumericValues[0].column === '') return false;
  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <p data-testid="filter">
          {`Filtro aplicado: ${column} | ${comparison} | ${value} `}
          <button key={column} type="button" value="X" onClick={() => handleRemove(column)}>
            X
          </button>
        </p>
      ))}
    </div>
  );
};

export function Filters() {
  const [state, setState] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const {
    stateFilters: { options, filterByNumericValues },
    addFilter,
    removeFilter,
    filterNames,
    dispatch,
  } = useContext(StarWarsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(() => ({ ...state, [name]: value }));
  };

  const handleSubmit = () => {
    const { column, comparison, value } = state;
    if (value === '') return false;
    dispatch(addFilter(column, comparison, value));
    setState({
      column: '',
      comparison: '',
      value: '',
    });
    return true;
  };

  const handleRemove = (column) => {
    dispatch(removeFilter(column));
  };

  return (
    <div>
      <div className="filterBox">
        {renderInputName(dispatch, filterNames)}
        {renderOptionsFilter(handleChange, options)}
        {renderComparisonFilter(handleChange)}
        {renderValueFilter(handleChange, state.value)}
        {renderSubmitButton(handleSubmit)}
      </div>
      <SortFilters />
      <div>{renderActiveFilters(filterByNumericValues, handleRemove)}</div>
    </div>
  );
}

export default Filters;
