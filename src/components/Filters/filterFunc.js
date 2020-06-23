const filterFunc = (planets, name, numericValues) => {
  if (numericValues.length === 0) {
    return planets.filter((planet) => planet.name.includes(name));
  }
  return numericValues.reduce(
    (acc, { column, comparison, value }) => acc.filter((planet) => {
      switch (comparison) {
        case 'maior que':
          return (
            planet.name.includes(name)
              && parseFloat(planet[column]) > parseFloat(value)
          );
        case 'menor que':
          return (
            planet.name.includes(name)
              && parseFloat(planet[column]) < parseFloat(value)
          );
        case 'igual a':
          return (
            planet.name.includes(name)
              && parseFloat(planet[column]) === parseFloat(value)
          );
        default:
          return planet.name.includes(name);
      }
    }),
    planets,
  );
};

export default filterFunc;
