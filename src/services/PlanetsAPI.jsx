async function getPlanets() {
  const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((r) => r.json());
  return planets.results;
}

export default getPlanets;
