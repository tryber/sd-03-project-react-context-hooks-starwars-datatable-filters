// const initialState = {
//   filterByName: {
//     name: '',
//   },
//   filterByNumericValues: [],
// };

// export const FILTER_COLUMN = 'FILTER_COLUMN';

// export const UNFILTER_COLUMN = 'UNFILTER_COLUMN';

// export const filterColumn = (column) => ({
//   type: FILTER_COLUMN,
//   payload: column,
// });

// export const unfilterColumn = (column) => ({
//   type: UNFILTER_COLUMN,
//   payload: column,
// });

// const searchReducer = (state = initialState, action) => {
//   const { payload, text, type } = action;
//   switch (type) {
//     case FILTER_COLUMN:
//       return {
//         ...state,
//         columnFilter: [...state.columnFilter, payload],
//       };

//     case UNFILTER_COLUMN:
//       return {
//         ...state,
//         columnFilter: state.columnFilter.filter(
//           (column) => column !== payload,
//         ),
//       };

//     default:
//       return state;
//   }
// };
