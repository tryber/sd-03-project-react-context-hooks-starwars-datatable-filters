import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from './context/StarWarsContext';
import RenderTHead from './components/RenderTHead';
import RenderTBody from './components/RenderTBody';
import './App.css';

const App = () => {
  const { dataTable, isRequesting, requestDataTable } = useContext(StarWarsContext);

  useEffect(() => {
    requestDataTable();
  }, []);

  if (isRequesting) return <h1>Loading ...</h1>;

  return (
    <div className="App">
      <table>
        <RenderTHead />
        <RenderTBody
          filteredTable={dataTable}
        />
      </table>
    </div>
  );
};

export default App;
