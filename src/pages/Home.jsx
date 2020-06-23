import React, { useContext } from 'react';
import PlanetTableContext from '../context';
import { Table, FilterContainer } from '../components';

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
