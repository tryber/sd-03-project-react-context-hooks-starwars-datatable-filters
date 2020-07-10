import React, { useEffect, useContext } from 'react';
import Tabela from './Tabela/Tabela';
import Filtros from '../components/Filtros/Filtros';
import StarWarsContext from '../context/StarWarsContext';

function Home() {
  const { requestFetch, isFetching } = useContext(StarWarsContext);
  useEffect(() => {
    requestFetch();
  }, []);

  if (isFetching) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>StarWars Datatable with Filters</h1>
      <Filtros />
      <Tabela />
    </div>
  );
}

export default Home;
