// const columns = filters.map((filter) => filter.column);
// columnFilter = columnFilter.filter((item) => !columns.includes(item));

// Compare wheter the planet fits the filter
const comparator = (column, comparison, value, element) => {
  switch (comparison) {
    case 'maior que':
      return Number(element[column]) > Number(value);
    case 'igual a':
      return Number(element[column]) === Number(value);
    case 'menor que':
      return Number(element[column]) < Number(value);
    default:
      return [];
  }
};

// Text filter
const filterByText = (name, table) => {
  if (name) {
    return table.filter(
      (planet) => planet
        .name
        .toLowerCase()
        .includes(
          name.toLowerCase(),
        ),
    );
  }
  return table;
}

// column filter
const filterByNumeric = (name, table, filters) => {
  const filteredList = filters.reduce(
    (acc, { column, comparison, value }) => acc.filter(
      (element) => comparator(column, comparison, value, element),
    ), filterByText(name, table),
  );
  return filteredList;
}

export default filterByNumeric();
