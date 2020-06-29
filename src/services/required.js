export default async function apiPlanets() {
  return fetch(
    'https://swapi-trybe.herokuapp.com/api/planets/',
  ).then((response) => response
      .json()
      .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
}

// const api = 'https://swapi-trybe.herokuapp.com/api/planets/';

