import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsContext from './context/StarWarsContext';
import getStarWarsPlanetsData from './services/starwarsAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: [],
    };

    this.fetchStarWars = this.fetchStarWars.bind(this);
    this.handleStarWarsSuccess = this.handleStarWarsSuccess.bind(this);
    this.handleStarWarsFailure = this.handleStarWarsFailure.bind(this);
  }

  fetchStarWars() {
    const { isFetching } = this.state;

    if (isFetching) return;

    this.setState({ isFetching: true });

    getStarWarsPlanetsData()
    .then(this.handleStarWarsSuccess, this.handleStarWarsFailure);
  }

  handleStarWarsSuccess(response) {
    const { results: data } = response;
    this.setState({
      isFetching: false,
      data,
    });
  }

  handleStarWarsFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  render() {
    const contextValue = {
      ...this.state,
    };
    return (
      <StarWarsContext.Provider value={contextValue}>
        <div>
          <Table getStarWarsPlanetsData={this.fetchStarWars} />
        </div>
      </StarWarsContext.Provider>
    );
  }
}

export default App;
