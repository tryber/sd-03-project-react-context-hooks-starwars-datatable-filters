import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputName = () => {
  const { setFilterByName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        id="search-bar"
        onChange={({ target: { name, value } }) => setFilterByName({ [name]: value })}
      />
      <label htmlFor="search-bar">Search by planet name:</label>
    </div>
  );
}

export default InputName;
