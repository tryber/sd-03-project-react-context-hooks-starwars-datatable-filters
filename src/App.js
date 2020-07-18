import React from 'react';
import './App.css';
import Table from './components/Table';
import { StarWarsProvider } from './components/StarWarsContext';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <StarWarsProvider>
        <div className="App">
          <header className="page-header">
            <h1>StarWars Datatable with Filters</h1>
          </header>
          <SearchBar />
          <Table getPlanetsList={this.fetchPlanetsList} />
        </div>
      </StarWarsProvider>
    );
  }
}

export default App;