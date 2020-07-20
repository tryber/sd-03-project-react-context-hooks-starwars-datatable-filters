
const UpdateColumn = (numberValues) => {
  const columnValues = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const stateColumns = numberValues.map((e) => e.column);
  return [
    '',
    ...columnValues.filter((option) => !stateColumns.includes(option)),
  ];
};

export default UpdateColumn;
