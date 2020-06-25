const SW_API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const SW_API = async () => {
  const response = await fetch(SW_API_URL);
  const json = await response.json();
  return (response.ok ? Promise.resolve(json) : Promise.reject(json));
};

export default SW_API;
