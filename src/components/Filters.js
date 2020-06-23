import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsContext';

const nameFilter = (handler) => (
  <input type="text" onChange={(e) => handler(e.target.value)} />
);

const Filters = () => {
  const { handlers: { setNameFilter } } = useContext(PlanetsContext);
  return (
    <div>
      {nameFilter(setNameFilter)}
    </div>
  );
};

export default Filters;
