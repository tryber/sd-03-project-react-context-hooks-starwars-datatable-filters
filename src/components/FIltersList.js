
handleRemove(column) {
  const { removeFilter } = this.props;
  removeFilter(column);
}

renderActiveFilters(filterByNumericValues) {
  if (filterByNumericValues.length === 0 || filterByNumericValues[0].column === '') return false;
  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }) => (
        <p data-testid="filter">
          {`Filtro aplicado: ${column} | ${comparison} | ${value} `}
          <button
            key={column}
            type="button"
            value="X"
            onClick={() => this.handleRemove(column)}
          >
            X
          </button>
        </p>
      ))}
    </div>
  );
}
