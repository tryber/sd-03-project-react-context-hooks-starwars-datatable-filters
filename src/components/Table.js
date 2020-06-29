import React, { useContext, useEffect } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import SearchImputs from './SearchImputs';
import NavigationBar from './NavigationBar';
import contextAPI from '../context/contextAPI';

function comparasionChosed(column, comparison, value, planet) {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    default:
      return [];
  }
}

const planetFilter = (data, textSearch) => {
  if (textSearch !== '') {
    return data.filter(({ name }) => name.toLowerCase().includes(textSearch.toLowerCase()));
  }
  return data;
};

const selectedFilters = (data, numberSearch, textSearch) => {
  if (numberSearch) {
    return numberSearch.reduce((acc, { column, comparison, value }) => acc
      .filter((planet) => comparasionChosed(column, comparison, value, planet)),
    planetFilter(data, textSearch));
  }
  return planetFilter(data, textSearch);
};

function Table() {
  const {
    activeFilter,
    loading,
    data,
    callAPI,
  } = useContext(contextAPI);
  const numberSearch = activeFilter.filterByNumericValues;
  const textSearch = activeFilter.filterByName.name;

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <div>
        <SearchImputs />
        <NavigationBar />
        {/* <Remover /> */}
      </div>
      <div>
        <table>
          <TableHead />
          <TableBody data={selectedFilters(data, numberSearch, textSearch)} />
        </table>
      </div>
      {loading && <h1>loading....</h1>}
    </div>
  );
}

export default Table;
