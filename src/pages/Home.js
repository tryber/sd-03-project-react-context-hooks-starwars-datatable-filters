import React from 'react';
import Loading from '../components/Loading';
import Table from '../components/Table';
import starWarsApi from '../services/starWarsApi';
import StarWarsContext from '../context/StarWarsContext';
import Inputs from '../components/Inputs';

function Home() {
  const [name, setName] = React.useState('');
  const [data, setData] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [filterByNumericValues, setFilterByNumericValues] = React.useState([]);

  const context = {
    setFilterByNumericValuesFunc: (filters) =>
      setFilterByNumericValues([...filterByNumericValues, filters]),
    removeFilterByNumericValues: (removedFilter) =>
      setFilterByNumericValues(removedFilter),
    setNameFunc: (nameInput) => setName(nameInput),
    data,
    filterByName: {
      name,
    },
    filterByNumericValues,
  };

  React.useEffect(() => {
    starWarsApi('planets').then((res) => {
      setIsFetching(false);
      setData(res.results);
    });
  }, []);

  if (isFetching) return <Loading />;
  return (
    <div>
      <StarWarsContext.Provider value={context}>
        <Inputs />
        <Table />
      </StarWarsContext.Provider>
    </div>
  );
}

export default Home;
