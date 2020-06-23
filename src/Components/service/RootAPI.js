const planet = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const RootAPI = () => (
  fetch(planet).then((response) => response.json()
  .then((data) => (response.ok ? Promise.resolve(data.results) : Promise.reject(data))))
);

export default RootAPI;
