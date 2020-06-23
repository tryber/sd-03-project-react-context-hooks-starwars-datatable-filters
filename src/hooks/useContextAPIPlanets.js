import { useState, useEffect } from 'react'

const useContextAPIPlanets = test => {
  const [planetsAPIreq, setPlanetsAPIreq] = useState(test)
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi-trybe.herokuapp.com/api/planets/");
      res
      .json()
        .then(setPlanetsAPIreq)
        .catch(setPlanetsAPIreq);
    };
    fetchData();
  }, []);
  return planetsAPIreq;
}

export default useContextAPIPlanets;
