import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';


export default () => {
  const [state, setState] = useState({ column: 'Name', sort: 'ASC' });
  const handleState = (e) => {
    const { value, name } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { submitSort, filteredData } = useContext(StarWarsContext);
  const columns = Object.keys(filteredData[0]);
  return (
    <div>
      <div>
        <select
          data-testid="column-sort"
          onChange={(e) => handleState(e)}
          name="column"
          defaultValue="Name"
        >
          {!!columns && columns.map((value) => (<option key={value}>{value}</option>))}
        </select>
        <span>
          <label htmlFor="sort">
            Ascendente
            <input
              data-testid="column-sort-input-asc"
              name="sort"
              onChange={(e) => handleState(e)}
              type="radio"
              value="ASC"
            />
          </label>
          <label htmlFor="sort">
            Descendente
            <input
              data-testid="column-sort-input-desc"
              name="sort"
              onChange={(e) => handleState(e)}
              type="radio"
              value="DESC"
            />
          </label>
        </span>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={() => submitSort(state.column, state.sort)}
        >
          Sort
        </button>
      </div>
    </div>
  );
};
