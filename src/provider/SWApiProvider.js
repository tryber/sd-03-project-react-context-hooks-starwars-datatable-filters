import React, { useState } from 'react';
import SWApiContext from '../context/SWApiContext';
import apiSWRequest from '../service/apiSWRequest';

const SWApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const apiRequestSucceed = ({ results }) => {
    setData(results);
    setIsLoading(false);
  };

  const apiRequestFailure = ({ message }) => {
    setErrorMessage(message);
    setIsLoading(false);
  };

  const apiSWRequestFunction = () => {
    setIsLoading(true);
    apiSWRequest()
      .then(apiRequestSucceed, apiRequestFailure);
  };

  const apiSwContext = {
    data,
    isLoading,
    errorMessage,
    apiSWRequestFunction,
  };

  return (
    <SWApiContext.Provider value={apiSwContext}>
      {children}
    </SWApiContext.Provider>
  );
};

export default SWApiProvider;
