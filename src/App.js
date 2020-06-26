import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import planetsFetch from './actions/planetsFetch';
// import apiFetch from './services/apiFetch';
import Home from './components/Home';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <center>
        <Home />
      </center>
    </StarWarsProvider>
  );
}

export default App;


// first we will make a new context
// const MyContext = createContext();

// Then create a provider Component
