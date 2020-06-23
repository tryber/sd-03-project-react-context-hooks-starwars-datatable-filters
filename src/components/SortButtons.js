import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const renderSortButtons = (setOrder, order) => {
  return (
    <div>
      <input
        type="radio"
        name="sort"
        value="ASC"
        id="ASC"
        data-testid="column-sort-input"
        onChange={({ target: { name, value } }) => setOrder({ order: { ...order, [name]: value } })}
      />
      <label htmlFor="ASC">Crescente</label>
      <input
        type="radio"
        name="sort"
        value="DESC"
        id="DESC"
        data-testid="column-sort-input"
        onChange={({ target: { name, value } }) => setOrder({ order: { ...order, [name]: value } })}
      />
      <label htmlFor="DESC">Decrescente</label>
    </div>
  );
}

const SortButtons = () => {
  const [order, setOrder] = useState({ column: '', sort: '' });
  const [options, setOptions] = useState(['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'])
  const { sortFilter } = useContext(StarWarsContext);
  return (
    <div>
      <div>
        <select
          data-testid="column-sort"
          name="column"
          onChange={({ target: { name, value } }) => setOrder({ order: { ...order, [name]: value } })}
        >
          <option value="" />
          {options.map((column) => <option value={column} key={column}>{column}</option>)}
        </select>
        {renderSortButtons(setOrder, order)}
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={() => {
            if (order.column === '' || order.sort === '') return false;
            sortFilter(order);
            return true;
          }}
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default SortButtons;
