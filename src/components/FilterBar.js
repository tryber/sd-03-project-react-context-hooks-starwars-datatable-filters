// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import {
//   filterByName,
//   activateFilters,
//   filterByNumberValues,
//   // removeFilterValue,
// } from '../actions';

// class FilterBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       actualFilters: { column: '', comparison: '', value: '' },
//     };
//     this.handleSelectColumn = this.handleSelectColumn.bind(this);
//     this.handleInterval = this.handleInterval.bind(this);
//     this.handleInput = this.handleInput.bind(this);
//     this.activateFilter = this.activateFilter.bind(this);
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.filters !== this.props.filters) {
//       const { filterByNumberValuesTo } = this.props;
//       const newDataFiltered = this.concatFilters();
//       filterByNumberValuesTo({ data: [...newDataFiltered] });
//     }
//   }

//   concatFilters() {
//     const { filters, data } = this.props;
//     return (
//       filters.filterByNumericValues
//         .reduce((acumulator, { column, comparison, value }) => acumulator
//           .reduce((dataFiltered, planet) => {
//             if (comparison === 'maior que') {
//               if ((parseInt(planet[column], 10)) > parseInt(value, 10)) {
//                 dataFiltered.push(planet);
//               }
//             } else if (comparison === 'menor que') {
//               if (parseInt(planet[column], 10) < parseInt(value, 10)) {
//                 dataFiltered.push(planet);
//               }
//             } else if (parseInt(planet[column], 10) === parseInt(value, 10)) {
//               dataFiltered.push(planet);
//             }
//             return dataFiltered;
//           }, []), data)
//     );
//   }

//   activateFilter() {
//     const { activateFiltersTo } = this.props;
//     activateFiltersTo({ actualFilters: { ...this.state.actualFilters } });
//   }

//   handleSelectColumn(event) {
//     const { value } = event.target;
//     this.setState((state) => ({ actualFilters: { ...state.actualFilters, column: value } }));
//   }

//   handleInterval(event) {
//     const { value } = event.target;
//     this.setState((state) => ({ actualFilters: { ...state.actualFilters, comparison: value } }));
//   }

//   handleInput(event) {
//     const { value } = event.target;
//     this.setState((state) => ({ actualFilters: { ...state.actualFilters, value } }));
//   }

//   renderFilterBar() {
//     return (
//       <div>
//         <input
//           onChange={this.handleInput}
//           data-testid="value-filter"
//           type="number"
//           placeholder="Digite um Número"
//         />
//         <button data-testid="button-filter" onClick={this.activateFilter}>Filtrar</button>
//       </div>
//     );
//   }

//   renderForm() {
//     const { filterByNameTo } = this.props;
//     return (
//       <form>
//         <input
//           onChange={(event) => filterByNameTo(event.target.value)}
//           data-testid="name-filter"
//           type="text"
//           placeholder="Filtro"
//         />
//       </form>
//     );
//   }

//   renderColumns() {
//     const { filters: { filterByNumericValues } } = this.props;
//     const columns = [
//       'population',
//       'orbital_period',
//       'diameter',
//       'rotation_period',
//       'surface_water',
//     ];
//     return (
//       <select data-testid="column-filter" onChange={this.handleSelectColumn}>
//         <option value="Coluna">Coluna</option>
//         {filterByNumericValues.every(({ column }) => column !== columns[0])
//           && <option value="population">population</option>}
//         {filterByNumericValues.every(({ column }) => column !== columns[1])
//           && <option value="orbital_period">orbital_period</option>}
//         {filterByNumericValues.every(({ column }) => column !== columns[2])
//           && <option value="diameter">diameter</option>}
//         {filterByNumericValues.every(({ column }) => column !== columns[3])
//           && <option value="rotation_period">rotation_period</option>}
//         {filterByNumericValues.every(({ column }) => column !== columns[4])
//           && <option value="surface_water">surface_water</option>}
//       </select>
//     );
//   }

//   // renderFiltersApplied() {
//   //   const { filters: { filterByNumericValues }, removeFilter } = this.props;
//   //   return (
//   //     <div>
//   //       <ul>
//   //         {filterByNumericValues.map((filter) => (
//   //           <div key={filter.column} data-testid="filter">
//   //             Filtro 1:
//   //             {`${filter.column} ${filter.comparison} ${filter.value}`}
//   //             <button
//   //               onClick={() => removeFilter(filter)}
//   //             >
//   //               X
//   //             </button>
//   //           </div>
//   //         ))}
//   //       </ul>
//   //     </div>
//   //   );
//   // }

//   render() {
//     return (
//       <div>
//         {this.renderForm()}
//         <div>
//           {this.renderColumns()}
//           <select data-testid="comparison-filter" onChange={this.handleInterval}>
//             <option value="Select">Intervalo</option>
//             <option value="maior que">maior que</option>
//             <option value="menor que">menor que</option>
//             <option value="igual a">igual a</option>
//           </select>
//           {this.renderFilterBar()}
//         </div>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   filterByNameTo: (name) => dispatch(filterByName(name)),
//   filterByNumberValuesTo: (payload) => dispatch(filterByNumberValues(payload)),
//   activateFiltersTo: (payload) => dispatch(activateFilters(payload)),
//   // removeFilter: (filter) => dispatch(removeFilterValue(filter)),
// });

// const mapStateToProps = (state) => ({
//   filters: state.filters,
//   data: state.data,
// });

// FilterBar.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.shape({
//     population: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     climate: PropTypes.string.isRequired,
//     created: PropTypes.string.isRequired,
//     diameter: PropTypes.string.isRequired,
//     edited: PropTypes.string.isRequired,
//     orbital_period: PropTypes.string.isRequired,
//     rotation_period: PropTypes.string.isRequired,
//     terrain: PropTypes.string.isRequired,
//     surface_water: PropTypes.string.isRequired,
//     films: PropTypes.arrayOf(PropTypes.string).isRequired,
//     gravity: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//   })).isRequired,
//   filters: PropTypes.shape({
//     filterByName: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }).isRequired,
//     filterByNumericValues: PropTypes.arrayOf(PropTypes.shape({
//       column: PropTypes.string.isRequired,
//       comparison: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired,
//     })).isRequired,
//   }).isRequired,
//   filterByNameTo: PropTypes.func.isRequired,
//   filterByNumberValuesTo: PropTypes.func.isRequired,
//   activateFiltersTo: PropTypes.func.isRequired,
//   // removeFilter: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
