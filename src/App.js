import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from './context/StarWarsContext';
import RenderTHead from './components/RenderTHead';
import RenderTBody from './components/RenderTBody';
import './App.css';

const App = () => {
  const store = useContext(StarWarsContext);

  useEffect(() => {
    store.requestDataTable();
  }, []);

  if (store.isRequesting) return <h1>Loading ...</h1>;

  return (
    <div className="App">
      <table>
        <RenderTHead />
        <RenderTBody
          filteredTable={store.dataTable}
          isRequesting={store.isRequesting}
        />
      </table>
    </div>
  );
};

export default App;
