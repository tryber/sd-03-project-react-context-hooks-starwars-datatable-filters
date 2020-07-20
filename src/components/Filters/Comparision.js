
const Comparision = (planetas, text, numberValues) => {
  if (numberValues.length === 0) {
    return planetas.filter((planet) => planet.name.includes(text));
  }
  return numberValues.reduce(
    (acc, { column, comparison, value }) => acc.filter(
      (planet) => {
        switch (comparison) {
          case 'maior que':
            return (
              planet.name.includes(text) && (
                parseFloat(planet[column]) > parseFloat(value)
              )
            );
          case 'menor que':
            return (
              planet.name.includes(text) && (
                parseFloat(planet[column]) < parseFloat(value)
              )
            );
          case 'igual a':
            return (
              planet.name.includes(text) && (
                parseFloat(planet[column]) === parseFloat(value)
              )
            );
          default:
            return planet.name.includes(text);
        }
      },
    ),
    planetas,
  );
};

export default Comparision;
