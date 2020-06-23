import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filter = () => {
  const { setName } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="name-filter">
        <span>Pesquise pelo nome do Planeta </span>
      </label>
      <input
        data-testid="name-filter" type="text" name="name-filter"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Filter;
