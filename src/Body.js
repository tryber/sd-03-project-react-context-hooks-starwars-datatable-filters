import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Table from './components/Table';
import { DataContext } from './context/dataProvider';
import { FilterContext } from './context/filterProvider';
import fetchPlanets from './services/fetchAPI';
import './App.css';

function Body() {
  const { planets, setPlanets, loading, setLoading } = useContext(DataContext);
  const { filter } = useContext(FilterContext);

  // Hook de ciclo de vida, executa apenas na inicialização do componente
  useEffect(() => {
    fetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((data) => {
        setPlanets(data);
        setLoading(false);
      });
  }, []);

    const { count, next, previous, results } = planets;
    const { filterByName, filterByNumericValues } = filter;

    if (loading) return (<p>Carregamento...</p>);
    return (
      <div className="Body">
        {Table(results, filterByName, filterByNumericValues)}
        <p>A pesquisa retornou {count} resultados.</p>
        {previous ? (
          <button onClick={() => (fetchPlanets(previous))}>Página anterior</button>) :
          <button disabled>Voltar uma</button>}
        {next ? (
          <button onClick={() => (fetchPlanets(next))}>Próxima página</button>) :
          <button
            onClick={() => (fetchPlanets('https://swapi-trybe.herokuapp.com/api/planets/'))}
          >
          Voltar p/ primeira</button>}
      </div>
    );
  }

// const mapStateToProps = (state) => ({
//   // numResults: state.planetReducer.count,
//   // nextPageURL: state.planetReducer.next,
//   nameFilter: state.filters.filterByName,
//   numericFilter: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => (
//   {
//     fetchPlanets: (u) => dispatch(fetchPlanet(u)),
//   }
// );

Body.defaultProps = {
  nameFilter: {},
  nextPageURL: '',
  numericFilter: {},
  planets: [],
};

Body.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.object.isRequired),
  loading: PropTypes.bool.isRequired,
  // numResults: PropTypes.number.isRequired,
  fetchPlanets: PropTypes.func.isRequired,
  nextPageURL: PropTypes.string,
  nameFilter: PropTypes.objectOf((PropTypes.string.isRequired)),
  numericFilter: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default Body;
