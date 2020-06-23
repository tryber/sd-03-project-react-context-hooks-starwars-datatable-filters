import React, { Component } from 'react';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/starWarsAPI';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      error: null,
      data: [],
    }
    this.fetchPlanetsData = this.fetchPlanetsData.bind(this);
    this.handlePlanetsSuccess = this.handlePlanetsSuccess.bind(this);
    this.handlePlanetsFailure = this.handlePlanetsFailure.bind(this);
  }
  fetchPlanetsData() {
    const { isFetching } = this.state;
    if (isFetching) return;
    this.setState({ isFetching: true });
    fetchPlanets()
      .then(this.handlePlanetsSuccess, this.handlePlanetsFailure);
  }

  handlePlanetsFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    });
  }

  handlePlanetsSuccess(response) {
    const { results  } = response;
    this.setState({
      isFetching: false,
      data: results,
    });
  }

   render() {
    const context = {
      ...this.state,
      getPlanetsData: this.fetchPlanetsData,
    }
    const { children } = this.props;
    return(
      <StarWarsContext.Provider value={context}>
        {children}
      </StarWarsContext.Provider>
    );
  }
}

export default Provider;