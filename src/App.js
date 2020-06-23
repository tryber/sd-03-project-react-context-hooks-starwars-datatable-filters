import React from 'react';
import StarWarsContext from './context/StarWarsContext';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    
     <StarWarsContext.Provider>
       <Home />
     </StarWarsContext.Provider>
   
  );
}


export default App;
