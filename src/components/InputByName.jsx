import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

function InputByName() {
  const { filterByName } = useContext(StarWarsContext);
  return (
    <div className="field">
      <label className="label" htmlFor="byName">
        Filtro pelo nome
      </label>
      <div className="control">
        <input
          className="input is-info"
          id="byName"
          type="text"
          placeholder="Filtro por nome"
          data-testid="name-filter"
          onChange={(e) => filterByName(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputByName;
