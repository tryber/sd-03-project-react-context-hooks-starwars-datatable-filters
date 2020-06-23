import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from './context/StarWarsContext';
import RenderTHead from './components/RenderTHead';
import RenderTBody from './components/RenderTBody';
import './App.css';

const App = () => {
  const storeContext = useContext(StarWarsContext);

  useEffect(() => {
    storeContext.requestDataTable();
  }, []);

  if (storeContext.isRequesting) return <h1>Loading ...</h1>;

  return (
    <div className="App">
      <table>
        <RenderTHead />
        <RenderTBody
          filteredTable={storeContext.dataTable}
        />
      </table>
    </div>
  );
};

export default App;
