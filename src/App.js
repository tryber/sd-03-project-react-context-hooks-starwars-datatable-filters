import React from 'react';
import './App.css';
import Body from './Body';
import SearchBar from './components/SearchBar';
import DataProvider from './context/dataProvider';
import FilterProvider from './context/filterProvider';

function App() {
  return (
    <DataProvider>
      <FilterProvider>
        <div className="App">
          <header>
            <h2>Projeto Bloco 18</h2>
            <SearchBar />
            <h2>StarWars Datatable with Filters 'n' Hooks</h2>
          </header>
          <Body />
        </div>
      </FilterProvider>
    </DataProvider>
  );
}

export default App;
