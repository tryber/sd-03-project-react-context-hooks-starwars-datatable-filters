import React, { useContext } from 'react';
import PlanetTableContext from '../context/context';
import Table from '../components/table/Table';
import FilterContainer from '../components/filters/FilterContainer';

const Home = () => {
  const {
    fetchData: { error, loading },
  } = useContext(PlanetTableContext);

  return (
    <main>
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h4>{error}</h4>}
      {!loading && (
        <div>
          <div>
            <FilterContainer />
          </div>
          <Table />
        </div>
      )}
    </main>
  );
};

export default Home;
