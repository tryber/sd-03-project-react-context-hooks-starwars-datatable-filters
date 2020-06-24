import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function FilterButton(props) {
  const { column, comparison, value } = props;
  const { setFilterByNumericValues } = useContext(StarWarsContext);
  return (
    <div className="field">
      <div className="control">
        <button
          className="button is-info"
          type="button"
          data-testid="button-filter"
          onClick={() => setFilterByNumericValues({column, comparison, value})}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default FilterButton;
