import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';


const SubmitButton = () => {
  const { filterByNumericValues } = useContext(StarWarsContext);
  const { column, comparison, value } = filterByNumericValues;

  return (
    <input
      type="submit"
      value="Adicionar Filtro"
      className={!(column && comparison && value) ? 'filter-button-disabled' : undefined}
      data-testid="button-filter"

    />
  );
}

export default SubmitButton;
