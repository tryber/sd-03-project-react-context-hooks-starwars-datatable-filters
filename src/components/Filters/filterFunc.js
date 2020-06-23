const filterFunc = (planets, name, numericValues = []) => {
  console.log('planets', planets)
  if (numericValues.length === 0) {
    const filtroPlanets = planets.filter((planet) => name === '' ? planet.name : planet.name.includes(name));
    console.log('filtroPlanets:', filtroPlanets);
    return filtroPlanets;
  }
  return numericValues.reduce(
    (acc, { column, comparison, value }) =>
      acc.filter((planet) => {
        switch (comparison) {
          case 'maior que':
            return (
              planet.name.includes(name) &&
              parseFloat(planet[column]) > parseFloat(value)
            );
          case 'menor que':
            return (
              planet.name.includes(name) &&
              parseFloat(planet[column]) < parseFloat(value)
            );
          case 'igual a':
            return (
              planet.name.includes(name) &&
              parseFloat(planet[column]) === parseFloat(value)
            );
          default:
            return planet.name.includes(name);
        }
      }),
    planets,
  );
};

export default filterFunc;
