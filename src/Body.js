import React, { useEffect, useContext } from 'react';
import Table from './components/Table';
import { DataContext } from './context/dataProvider';
import { FilterContext } from './context/filterProvider';
import fetchPlanets from './services/fetchAPI';
import './App.css';

function Body() {
  const { data, setData, url, setUrl, loading, setLoading } = useContext(DataContext);
  const { filter } = useContext(FilterContext);
  const { count, next, previous, results } = data;
  const { filterByName, filterByNumericValues } = filter;

  // Hook de ciclo de vida, executa apenas na inicialização do componente
  useEffect(() => {
    fetchPlanets(url)
      .then((retrieved) => {
        setData(retrieved);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, [url]);

  if (loading) return (<p>Carregamento...</p>);
  return (
    <div className="Body">
      {Table(results, filterByName, filterByNumericValues)}
      <p>A pesquisa retornou {count} resultados.</p>
      {previous ? (
        <button onClick={() => (setUrl(previous))}>Página anterior</button>) :
        <button disabled>Voltar uma</button>}
      {next ? (
        <button onClick={() => (setUrl(next))}>Próxima página</button>) :
        <button
          onClick={() => (setUrl('https://swapi-trybe.herokuapp.com/api/planets/'))}
        >
        Voltar p/ primeira</button>}
    </div>
  );
}

Body.defaultProps = {
  planets: [],
  nameFilter: {},
  nextPageURL: '',
  filterByName: {},
  numericFilter: {},
  filterByNumericValues: [],
};

export default Body;
