import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StarWarsContext as Context } from '../../context';
import filterByNumeric from '../../service/Filter';
import RenderThead from './renderThead';
import RenderFilters from './RenderFilters';

const Table = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [comparisonOptions, setComparisonOptions] = useState([
    'maior que',
    'igual a',
    'menor que',
  ]);
  const context = useContext(Context);

  // component did mount
  useEffect(() => {
    Context.getTable();
  }, []);

  const handleChange = (e) => {
    const { search } = this.props;
    search(e);
    filterByNumeric()
  }

  const renderColumnSelect = () => {
    const { columnFilter } = this.props;
    return (
      <label htmlFor="column-filter">
        Coluna:&nbsp;
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={({ target: { value } }) => this.setState({ column: value })}
        >
          <option value="" />
          {columnFilter.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
    );
  }

  const renderComparisonSelect = () => {
    return (
      <label htmlFor="comparison-filter">
        &nbsp;Comparação:&nbsp;
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          onChange={({ target: { value } }) => this.setState({ comparison: value })}
        >
          <option value="" />
          {comparisonFilter.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </label>
    );
  }

  const renderValueSelect = () => {
    return (
      <label htmlFor="value-filter">
        &nbsp;Valor:&nbsp;
        <input
          data-testid="value-filter"
          id="value-filter"
          onChange={({ target: { value } }) => this.setState({ value })}
          type="text"
        />
      </label>
    );
  }

  const renderButton = () => {
    const { selectDispatch } = this.props;
    const { column, comparison, value } = this.state;
    return (
      <button
        data-testid="button-filter"
        onClick={() => selectDispatch({ column, comparison, value })}
        type="button"
      >
        Filtrar:
      </button>
    );
  }

  const renderFiltersActive = (filters) => {
    const renderedFilters = filters.map(
      (item) => <RenderFilters key={item.column} filter={item} />,
    );
    if (renderedFilters) {
      return (
        <div>
          {renderedFilters}
        </div>
      );
    }
    return 0;
  }

  // render the table after filtering
  const renderTbody = () => {
    const filteredTable = this.filterByNumeric();
    return (
      <tbody>
        {filteredTable.map((planet) => (
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
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <div className="table-container">
      {renderColumnSelect()}
      {renderComparisonSelect()}
      {renderValueSelect()}
      {renderButton()}
      <label htmlFor="name-filter">
      &nbsp;Pesquisa:&nbsp;
        <input
          id="name-filter"
          data-testid="name-filter"
          type="text"
          onChange={({ target: { value } }) => handleChange(value)}
        />
      </label>
      {renderFiltersActive()}
      <br />
      <table>
        <RenderThead />
        {renderTbody()}
      </table>
    </div>
  );
}

Table.propTypes = {
  columnFilter: PropTypes.arrayOf(PropTypes.string).isRequired,
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  requestTable: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  selectDispatch: PropTypes.func.isRequired,
  table: PropTypes.arrayOf(PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

const mapStateTProps = (state) => ({
  table: state.requestReducer.data,
  name: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
  columnFilter: state.filters.columnFilter,
});

const mapDispatchToProps = (dispatch) => ({
  filterColumn: (column) => dispatch(filterColumn(column)),
  unfilterColumn: (column) => dispatch(unfilterColumn(column)),
});

export default Table;
