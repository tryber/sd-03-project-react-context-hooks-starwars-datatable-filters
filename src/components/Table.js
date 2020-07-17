import React, { useContext, useEffect } from 'react';
import ContextStarWars from '../context/contextStarWars';
import OrderColumn from '../helpers/functions';

function renderizaTableBody(element) {
  return (
    <tr key={element.name}>
      <td data-testid="planet-name">{element.name}</td>
      <td>{element.rotation_period}</td>
      <td>{element.orbital_period}</td>
      <td>{element.diameter}</td>
      <td>{element.climate}</td>
      <td>{element.gravity}</td>
      <td>{element.terrain}</td>
      <td>{element.surface_water}</td>
      <td>{element.population}</td>
      <td>{element.films}</td>
      <td>{element.created}</td>
      <td>{element.edited}</td>
      <td>{element.url}</td>
    </tr>
  );
}

function Table() {
  const {
    data, requestFetch,
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order: { column: columnSort },
    },
  } = useContext(ContextStarWars);
  useEffect(() => {
    requestFetch();
  }, []);

  const planets = OrderColumn(data,
    name,
    numericValues, columnSort);
  const headers = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
  return (
    <div>
      <div>
        <table>
          <thead data-testid="column-sort">
            <tr>
              {headers.map((element) => <th key={element}>{element}</th>)}
            </tr>
          </thead>
          <tbody>
            {planets !== undefined
              ? planets.map((element) => (
                renderizaTableBody(element)))
              : <h1>Placeholder Table </h1> }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

/* import PropTypes from 'prop-types';
import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { fetchData } from '../action/index';
import OrderColumn from '../helpers/functions';

export class Table extends Component {
  static renderizaTableBody(element) {
    return (
      <tr key={element.name}>
        <td>{element.name}</td>
        <td>{element.rotation_period}</td>
        <td>{element.orbital_period}</td>
        <td>{element.diameter}</td>
        <td>{element.climate}</td>
        <td>{element.gravity}</td>
        <td>{element.terrain}</td>
        <td>{element.surface_water}</td>
        <td>{element.population}</td>
        <td>{element.films}</td>
        <td>{element.created}</td>
        <td>{element.edited}</td>
        <td>{element.url}</td>
      </tr>
    );
  }

  render() {
    const { value } = this.props;
    const { filters } = value;
    const { filterByName, filterByNumericValues, order } = filters;
    const { data } = value;
    const planets = OrderColumn(data.results,
      filterByName.name,
      filterByNumericValues, order);
    const headers = ['name', 'rotation_period',
    'orbital_period', 'diameter', 'climate',
    'gravity', 'terrain', 'surface_water', 'population', 'films', 'created', 'edited', 'url'];
    return (
      <div>
        <table>
          <thead data-testid="column-sort">
            <tr>
              {headers.map((element) => <th key={element}>{element}</th>)}
            </tr>
          </thead>
          <tbody>
            {planets !== undefined
              ? planets.map((element) => (
                Table.renderizaTableBody(element)))
              : <h1>Placeholder Table </h1> }
          </tbody>
        </table>
      </div>
    );
  }
}

 const mapStateToProps = (state) => ({ value: state });

const mapDispatchToProps = (dispatch) => ({
  request: (e) => dispatch(fetchData(e)),
});

Table.propTypes = {
  value: PropTypes.instanceOf(Object),
};

Table.defaultProps = {
  value: {},
};

 export default connect(mapStateToProps, mapDispatchToProps)(Table);

export default Table; */
