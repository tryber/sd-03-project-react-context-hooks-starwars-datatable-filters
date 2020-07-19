import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsContext from './context/StarWarsContext';

const ShowContext = () => {
  return (
    <StarWarsContext.Consumer>
      {(context) => {
        return (
          <span>{`O valor do contexto é ${JSON.stringify(context)}`}</span>
        )
      }}
    </StarWarsContext.Consumer>
  )
}

function App() {

  const contextValue = {
    isFetching: false,
    data: [],
  };

  return (
    <StarWarsContext.Provider value={contextValue}>
      <div>
        <ShowContext />
        <Table />
      </div>
    </StarWarsContext.Provider>
  );
}

export default App;
