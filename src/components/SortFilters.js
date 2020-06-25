import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const renderSortButtons = (handleOrder) => (
  <div>
    <input
      type="radio"
      name="sort"
      value="ASC"
      id="ASC"
      data-testid="column-sort-input"
      onChange={(e) => handleOrder(e)}
    />
    <label htmlFor="ASC">Crescente</label>
    <input
      type="radio"
      name="sort"
      value="DESC"
      id="DESC"
      data-testid="column-sort-input"
      onChange={(e) => handleOrder(e)}
    />
    <label htmlFor="DESC">Decrescente</label>
  </div>
);

const renderSortFilter = (handleOrder, handleSubmitOrder) => {
  const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <div>
      <select data-testid="column-sort" name="column" onChange={(e) => handleOrder(e)}>
        <option value="" />
        {options.map((column) => (
          <option value={column} key={column}>
            {column}
          </option>
        ))}
      </select>
      {renderSortButtons(handleOrder)}
      <button type="button" data-testid="column-sort-button" onClick={() => handleSubmitOrder()}>
        Ordenar
      </button>
    </div>
  );
};

function SortFilters() {
  const { sortFilter, dispatch } = useContext(StarWarsContext);
  const [order, setOrder] = useState({ column: '', sort: '' });

  const handleOrder = (e) => {
    const { name, value } = e.target;
    setOrder((state) => ({
      order: {
        ...state.order,
        [name]: value,
      },
    }));
  };

  const handleSubmitOrder = () => {
    if (order.column === '' || order.sort === '') return false;
    dispatch(sortFilter(order));
    console.log('foi');
    return true;
  };

  return renderSortFilter(handleOrder, handleSubmitOrder);
}

export default SortFilters;
