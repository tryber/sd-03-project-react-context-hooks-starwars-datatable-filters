import React, { useContext } from 'react';
import { PlanetTableContext } from '../context';
import { Table, FilterContainer } from '../components';

const Home = () => {
  const {
    fetchData: { error, loading },
  } = useContext(PlanetTableContext);

  return (
    <main className="container">
      {loading && <h1>Loading...</h1>}
      {!loading && error && <h4>{error}</h4>}
      {!loading && (
        <section className="section">
          <div className="box">
            <FilterContainer />
          </div>
          <div className="box">
            <Table />
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
