import React, { useContext, useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import { fetchStarWars } from '../actions';
import TableHead from './TableHead';
import Filters from './Filters';
import { StarWarsContext } from '../context/StarWarsContext';
import { FiltersContext } from '../context/FiltersContext';
import getStarWarsPlanetsData from '../services/starwarsAPI';

const getFilteredName = (filters, data) => {
  const { filterByName: { name } } = filters;
  return data.filter((planet) => planet.name.includes(name));
};

function switchComparison(column, comparison, value, planet) {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
}

const getFilteredValues = (filters, data) => {
  const { filterByNumericValues } = filters;
  if (filterByNumericValues) {
    return filterByNumericValues.reduce(
      (acc, { column, comparison, value }) =>
        acc.filter((planet) => switchComparison(column, comparison, value, planet)),
      getFilteredName(filters, data),
    );
  }
  return getFilteredName(filters, data);
};

function ascOrder(columnA, columnB) {
  if (columnA > columnB) return 1;
  return -1;
}

function descOrder(columnA, columnB) {
  if (columnA < columnB) return 1;
  return -1;
}
const sortPlanets = (planetA, planetB, filters) => {
  const { order } = filters;

  let columnA = planetA[order.column.toLowerCase()];
  let columnB = planetB[order.column.toLowerCase()];

  if (order.column.toLowerCase() !== 'name') {
    columnA = Number(columnA);
    columnB = Number(columnB);
  }

  switch (order.sort) {
    case 'ASC':
      return ascOrder(columnA, columnB);
    case 'DESC':
      return descOrder(columnA, columnB);
    default:
      return 0;
  }
};

const Table = () => {
  const { filters } = useContext(FiltersContext);
  const { isFetching, setIsFetching, data, setData } = useContext(StarWarsContext);

  useEffect(() => {
    getStarWarsPlanetsData()
    .then((data) => {
      setIsFetching(false);
      setData(data.results);
    });
  }, []);

  if (isFetching) { return ( <span>Loading...</span> )};
  return (
    <div>
      <h1 className="table-title" >StarWars Datatable with Filters</h1>
      <Filters />
      <table>
        <TableHead />
        <tbody>
          {getFilteredValues(filters, data)
          .sort((planetA, planetB) => sortPlanets(planetA, planetB, filters))
          .map((planet) => (
            <tr key={planet.name}>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((film) => <p key={film}>{film}</p>)}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   data: state.starWars.data,
//   name: state.filters.filterByName.name,
//   getFilterByNumber: state.filters.filterByNumericValues,
//   order: state.filters.order,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getStarWarsPlanetsData: () => dispatch(fetchStarWars()),
// });

// Table.propTypes = {
//   getStarWarsPlanetsData: PropTypes.func.isRequired,
//   data: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     rotation_period: PropTypes.string.isRequired,
//     orbital_period: PropTypes.string.isRequired,
//     diameter: PropTypes.string.isRequired,
//     climate: PropTypes.string.isRequired,
//     gravity: PropTypes.string.isRequired,
//     terrain: PropTypes.string.isRequired,
//     surface_water: PropTypes.string.isRequired,
//     population: PropTypes.string.isRequired,
//     films: PropTypes.string.isRequired,
//     created: PropTypes.string.isRequired,
//     edited: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//   })),
//   name: PropTypes.string,
//   getFilterByNumber: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.string,
//     }),
//   ).isRequired,
//   order: PropTypes.objectOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       sort: PropTypes.string,
//     }),
//   ).isRequired,
// };

// Table.defaultProps = {
//   data: null,
//   name: null,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Table);
export default Table;
