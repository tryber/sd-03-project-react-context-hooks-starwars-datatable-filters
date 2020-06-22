import React, { useContext } from 'react';
import PlanetTableContext from '../context/context';
import Table from '../components/table/Table';
import FilterContainer from '../components/filters/FilterContainer';
import FetchData from '../components/FetchData';

const Home = () => {
  const { loading } = useContext(PlanetTableContext);
  return loading ? (
    <FetchData />
  ) : (
    <div>
      <div>
        <FilterContainer />
      </div>
      <Table />
    </div>
  );
};

export default Home;
