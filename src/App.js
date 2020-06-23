import React from 'react';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import Table from './components/Table';
import './App.css';
import SWApiContext from './context/SWApiContext';

const App = () => {
  // componentDidMount() {
  //   const { apiRequestDispatch } = this.props;
  //   apiRequestDispatch();
  // }

  const {
    isLoading,
    apiSWRequestFunction,
  } = useContext(SWApiContext);

  useEffect(() => {
    apiSWRequestFunction();
  }, []);

  if (!isLoading) {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
  return (<span>Loading...</span>);
};

// const mapDispatchToProps = (dispatch) => ({
//   apiRequestDispatch: () => dispatch(getApiDataSw()),
// });

// const mapStateToProps = (state) => ({
//   dataSw: state.apiSWReducer.data,
//   isLoading: state.apiSWReducer.loading,
// });

export default App;

App.propTypes = {
  apiSWRequestFunction: PropTypes.func,
  isLoading: PropTypes.bool,
};

App.defaultProps = {
  apiSWRequestFunction: () => {},
  isLoading: true,
};
