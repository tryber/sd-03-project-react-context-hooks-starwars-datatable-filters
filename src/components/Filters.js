import React, {
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SortFilters from './SortFilters';
import './Filters.css';

export function Filters() {
  const [state, setState] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const {
    stateFilters: {
      options,
      filterByNumericValues,
    },
    addFilter,
    removeFilter,
    filterNames,
    dispatch,
  } = useContext(StarWarsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const {
      column,
      comparison,
      value,
    } = state;
    if (value === '') return false;
    dispatch(
      addFilter(
        column,
        comparison,
        value,
      ),
    );
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

  const renderInputName = () => {
    return (
      <div>
        <input
          data-testid='name-filter'
          type='text'
          onChange={(e) =>
            dispatch(
              filterNames(
                e.target.value,
              ),
            )
          }
        />
      </div>
    );
  };

  const renderOptionsFilter = () => {
    return (
      <div>
        <select
          data-testid='column-filter'
          name='column'
          onChange={(e) =>
            handleChange(e)
          }
        >
          <option value='' />
          {options.map((column) => (
            <option
              value={column}
              key={column}
            >
              {column}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const renderComparisonFilter = () => {
    return (
      <div>
        <select
          data-testid='comparison-filter'
          name='comparison'
          onChange={(e) =>
            handleChange(e)
          }
        >
          <option value='' />
          <option value='maior que'>
            maior que
          </option>
          <option value='menor que'>
            menor que
          </option>
          <option value='igual a'>
            igual a
          </option>
        </select>
      </div>
    );
  };

  const renderValueFilter = () => {
    const { value } = state;
    return (
      <div>
        <input
          data-testid='value-filter'
          type='number'
          name='value'
          onChange={(e) =>
            handleChange(e)
          }
          value={value}
        />
      </div>
    );
  };

  const renderSubmitButton = () => {
    return (
      <button
        data-testid='button-filter'
        type='button'
        onClick={() => handleSubmit()}
      >
        Adicionar Filtro
      </button>
    );
  };

  const renderActiveFilters = (
    filterByNumericValues,
  ) => {
    if (
      filterByNumericValues.length ===
        0 ||
      filterByNumericValues[0]
        .column === ''
    )
      return false;
    return (
      <div>
        {filterByNumericValues.map(
          ({
            column,
            comparison,
            value,
          }) => (
            <p data-testid='filter'>
              {`Filtro aplicado: ${column} | ${comparison} | ${value} `}
              <button
                key={column}
                type='button'
                value='X'
                onClick={() =>
                  handleRemove(column)
                }
              >
                X
              </button>
            </p>
          ),
        )}
      </div>
    );
  };
  return (
    <div>
      <div className='filterBox'>
        {renderInputName()}
        {renderOptionsFilter()}
        {renderComparisonFilter()}
        {renderValueFilter()}
        {renderSubmitButton()}
      </div>
      <SortFilters />
      <div>
        {renderActiveFilters(
          filterByNumericValues,
        )}
      </div>
    </div>
  );
}

export default Filters;
