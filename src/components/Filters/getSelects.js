import updateColumn from './updateColumn';

export const getColumns = (onColumnChange, numericValues) => {
  const select = updateColumn(numericValues);
  return (
    <select
      onChange={(event) => onColumnChange(event)}
      data-testid="column-filter"
      value={column}
    >
      {select.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const getComparation = (onComparationChange) => {
  const comparationValues = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      onChange={(event) => onComparationChange(event)}
      data-testid="comparison-filter"
      value={comparation}
    >
      {comparationValues.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
