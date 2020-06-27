const fetchPlanets = (url) => (
  fetch(url)
    .then((rawResponse) => rawResponse.json())
    .then((json) => Promise.resolve(json))
    .catch((json) => Promise.reject(json))
);

export default fetchPlanets;
