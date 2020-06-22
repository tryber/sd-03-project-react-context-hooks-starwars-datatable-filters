import React from 'react';
import Loading from '../components/Loading';
import Table from '../components/Table';
import starWarsApi from '../services/starWarsApi';
import StarWarsContext from '../context/StarWarsContext';

function Home() {
  const [name, setName] = React.useState('');
  const [data, setData] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);

  const dataAndName = {
    data,
    name,
  }

  React.useEffect(() => {
    starWarsApi('planets').then((res) => {
      console.log(res);
      setIsFetching(false)
      setData(res.results);
    });
  }, []);

  if (isFetching) return <Loading />;
  return (
    <div>
      <label htmlFor="namePlanet">
        <input
          data-testid="name-filter"
          name="namePlanet"
          type="text"
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <StarWarsContext.Provider value={dataAndName}>
        <Table />
      </StarWarsContext.Provider>

    </div>
  );
}

export default Home;
