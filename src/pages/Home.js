import React, { useContext, useEffect } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
import Table from '../components/Table';
import FilterContainer from '../components/filters/FilterContainer';

function Home() {
  const { isFetching, data, fetchPlanets, filterByText, textFilter } = useContext(StarWarsContext);

  const filterDataByText = (dataSent) => {
    if (textFilter.filterByName.name !== '') {
      return dataSent.filter(({ name }) =>
      name.toLowerCase().includes(textFilter.filterByName.name.toLowerCase()));
    }
    return dataSent;
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className="Home">
      <div>
        <FilterContainer onChange={(event) => filterByText(event.target.value)} />
      </div>
      {isFetching ? (
        <h1>Loading..</h1>
      ) : (
        <Table data={filterDataByText(data)} />
      )}
    </div>
  );
}

export default Home;
