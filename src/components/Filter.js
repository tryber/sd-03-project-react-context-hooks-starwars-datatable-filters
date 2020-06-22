import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { filters } = useContext(StarWarsContext);
  const { getPlanetByName } = filters;
  return (
    <div>
      <label htmlFor="name-filter">
        <span>Pesquise pelo nome do Planeta </span>
      </label>
      <input
        data-testid="name-filter" type="text" name="name-filter"
        onChange={(e) => getPlanetByName(e.target.value)}
      />
    </div>
  );  
}

export default Filter;
