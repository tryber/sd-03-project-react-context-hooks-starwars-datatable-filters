import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const columns = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'gravity',
  'terrain',
  'surface_water',
  'population',
  'films',
  'created',
  'edited',
  'url',
];

const OrderTable = () => {
  const { setOrder } = useContext(StarWarsContext);
  const [stateColumn, setStateColumn] = useState('name');
  const [stateSort, setStateSort] = useState('ASC');
  let radioChecked = true;
  if (stateSort === 'ASC') { radioChecked = true; }
  if (stateSort === 'DESC') { radioChecked = false; }
  return (
    <div>
      <select data-testid="column-sort" onChange={(e) => setStateColumn(e.target.value)}>
        {columns.map((e) => <option key={e} value={e}>{e}</option>)}
      </select>
      <input
        data-testid="column-sort-input-asc"
        type="radio" name="adesc" onClick={() => setStateSort('ASC')}
        defaultChecked={radioChecked}
      /><span>ASC</span>
      <input
        data-testid="column-sort-input-desc"
        type="radio" name="adesc" onClick={() => setStateSort('DESC')}
        defaultChecked={!radioChecked}
      /><span>DESC</span>
      <button
        data-testid="column-sort-button"
        onClick={() => setOrder({ column: stateColumn, sort: stateSort })}
      >Ordenar</button>
    </div>
  );
};

export default OrderTable;
