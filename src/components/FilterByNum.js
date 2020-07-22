// import React, { useContext, useState } from 'react';
// import { FiltersContext } from '../context/FiltersContext';

// const FilterByNum = () => {
//   const {
//     filters,
//   } = useContext(FiltersContext);

//   const [state, setState] = useState({
//     column: '',
//     comparison: '',
//     value: '',
//     filters: ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
//   });

//   const selectAnOption = () => {
//     const { column } = state;
//     const { avaliableFilters } = filters;
//     return (
//       <select
//         data-testid="column-filter"
//         value={column}
//         onChange={(event) => setState({ ...state, column: event.target.value })}
//       >
//         <option value="" />
//         {avaliableFilters.reduce((acc, filter) => {
//           if (filter.avaliable) {
//             acc.push(<option value={filter.name} key={filter.name}>{filter.name}</option>);
//           }
//           return acc;
//         }, [])}
//       </select>
//     );
//   };

//   const selectACondition = () => {
//     const { comparison } = state;
//     return (
//       <select
//         data-testid="comparison-filter"
//         value={comparison}
//         onChange={(event) => setState({ ...state, comparison: event.target.value })}
//       >
//         <option value="" />
//         <option value="maior que">maior que</option>
//         <option value="menor que">menor que</option>
//         <option value="igual a">igual a</option>
//       </select>
//     );
//   };

//   const inputNumber = () =>
//     <input
//       data-testid="value-filter"
//       type="number"
//       placeholder="Digit a number"
//       onChange={(event) => setState({ ...state, value: event.target.value })}
//     />;

//   return (
//     <div>
//       <p>Select an option:</p>
//       {selectAnOption()}
//       <p>Select a condition:</p>
//       {selectACondition()}
//       {inputNumber()}
//     </div>
//   );
// };

// export default FilterByNum;
