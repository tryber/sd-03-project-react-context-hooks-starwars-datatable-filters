import React, { createContext, useState, useEffect } from 'react';

export const starWarsContext = createContext()


const StarWarsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([])
  const [Loading, setLoading] = useState(false)
  
  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then(response => response.json()
    .then(planets => setPlanets(planets.results)))
  }, []);

  const store = {
    planets,
    selectInput: [{id: 77}],
    filterByNamet: '',
    // Loading: [Loading, setLoading(true)],
    getPlanetByname: '',
  };

  return (
    <starWarsContext.Provider value={store}>
      {children}
    </starWarsContext.Provider>
  );
}

export default StarWarsProvider;
