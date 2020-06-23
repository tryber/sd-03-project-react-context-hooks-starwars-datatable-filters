// import React, { useContext } from 'react';
// import APIcontext from '../Context/APIcontext';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { removeFilters } from '../Actions';
// const columns = [
//   'population',
//   'orbital_period',
//   'diameter',
//   'rotation_period',
//   'surface_water',
// ];

// function RemoveFilters() {
//   const { saveFilter, filterSelect } = useContext(APIcontext);

//   const displayFilters = (list) => {
//     return (
//       <p key={list.column} data-testid="filter">
//         <span>{list.column}</span>
//         <span>{list.comparison}</span>
//         <span>{list.value}</span>
//         <button type="button" onClick={() => saveFilter(list, 'remove')}>
//           X
//         </button>
//       </p>
//     );
//   }

//   const infoFilters = columns.filter((ele) => ele.column !== '');
//   return (
//     <div>
//       <h1>Used Filters</h1>
//       {infoFilters.map((filter) => displayFilters(filter))}
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   filters: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removed: (value) => dispatch(removeFilters(value)),
// });

// RemoveFilters.propTypes = {
//   filters: PropTypes.arrayOf(
//     PropTypes.shape({
//       column: PropTypes.string,
//       comparison: PropTypes.string,
//       value: PropTypes.string,
//     }),
//   ).isRequired,
//   removed: PropTypes.func.isRequired,
// };

// export default RemoveFilters;
