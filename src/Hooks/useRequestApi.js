// import { useState, useEffect } from 'react';
// function useRequestApi() {
//   const [planets, setPlanets] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     fetch('https://swapi-trybe.herokuapp.com/api/planets/')
//       .then((response) => response.json()
//         .then((data) => setPlanets(data.results), setLoading(false)));
//   }, []);

//   return {
//     planets,
//     loading,
//   };
// }

// export default useRequestApi;
