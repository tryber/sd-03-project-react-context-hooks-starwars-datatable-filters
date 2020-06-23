import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table() {
  const { getPlanets, updateData } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanets('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((res) => {
        updateData(res.results);
      });
  }, []);

  return (
    <div className="table-container">
      <table className="table is-hoverable is-striped">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
