const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://swapi-trybe.herokuapp.com/api/planets';

const getAllPlanetsFromAPI = () => fetch(BASE_URL).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export default getAllPlanetsFromAPI;
