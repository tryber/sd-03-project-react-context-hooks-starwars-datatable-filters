import React, { useEffect, useContext } from 'react';
import './App.css';
import Table from './components/Table';
import Filters from './components/Filters';
import fetchAPI from './services/fetchAPI';
import { MyContext } from './context/context';

const Fix = () => {
  const { setData } = useContext(MyContext);
  useEffect(() => {
    fetchAPI()
      .then(
        (payload) => {
          setData(payload.results);
        },
      );
  }, [setData]);
  return (
    <div className="App">
      <Filters />
      <Table />
    </div>
  );
};

export default Fix;
