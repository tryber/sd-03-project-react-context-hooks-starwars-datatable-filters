export default function filterData(filters, data) {
  const { filterByName: { name }, filterByNumericValues } = filters;
  const dataFiltered = data.filter((planet) => planet.name.includes(name));
  return filterByNumericValues.reduce((acumulator, { column, comparison, value }) => acumulator
    .reduce((dataFilter, planet) => {
      if (comparison === 'maior que') {
        if ((parseInt(planet[column], 10)) > parseInt(value, 10)) {
          dataFilter.push(planet);
        }
      } else if (comparison === 'menor que') {
        if (parseInt(planet[column], 10) < parseInt(value, 10)) {
          dataFilter.push(planet);
        }
      } else if (parseInt(planet[column], 10) === parseInt(value, 10)) {
        dataFilter.push(planet);
      }
      return dataFilter;
    }, []), dataFiltered);
}
