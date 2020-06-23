import React, { createContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

const StarWarsContext = createContext();

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
const initalFilterState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
  order: {
    column: 'Name',
    sort: 'ASC',
  },
};

function sortBy(planetA, planetB, column) {
  let planet1 = planetA[column];
  let planet2 = planetB[column];
  if (Number(planet1) && Number(planet2)) {
    planet1 = Number(planet1);
    planet2 = Number(planet2);
    switch (true) {
      case planet1 > planet2:
        return 1;
      case planet1 < planet2:
        return -1;
      default:
        return 0;
    }
  }
  return planet1.toLowerCase().localeCompare(planet2.toLowerCase());
}

const numericFilter = (planet, column, comparison, value) => {
  switch (comparison) {
    case 'maior que':
      return Number(planet[column]) > Number(value);
    case 'menor que':
      return Number(planet[column]) < Number(value);
    case 'igual a':
      return Number(planet[column]) === Number(value);
    default:
      return [];
  }
};

export const SWProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setfetchError] = useState('');
  const [filters, setFilters] = useState(initalFilterState);
  const [filteredData, setFilteredData] = useState(data);

  const fetchData = () => fetch(URL)
    .then(async (resp) => {
      setIsFetching(true);
      try {
        const json = await resp.json();
        setData(json.results);
        setFilteredData(json.results);
        setIsFetching(false);
      } catch (e) {
        setfetchError(e);
        setIsFetching(false);
      }
    });

  const filterByText = (planets, text) => planets.filter((planet) => text === ''
  || planet.name.toUpperCase().includes(text.toUpperCase()));

  const filteredByNumeric = (dataSample) => {
    const { filterByNumericValues } = filters;
    return filterByNumericValues.reduce((acc, {
      column, comparison, value,
    }) => acc.filter((planet) => numericFilter(planet, column, comparison, value)), dataSample);
  };

  const sortByCondition = (dataToSort) => {
    const { sort, column } = filters.order;
    switch (sort) {
      case 'ASC':
        return dataToSort.sort((planetA, planetB) => sortBy(
          planetA, planetB, column.toLowerCase(),
        ));
      case 'DESC':
        return dataToSort.sort((planetA, planetB) => sortBy(
          planetA, planetB, column.toLowerCase(),
        )).reverse();
      default:
        return dataToSort;
    }
  };

  const applyFiltersEffect = () => {
    let arrayFiltered = filterByText(data, filters.filterByName.name);
    arrayFiltered = filteredByNumeric(arrayFiltered);
    arrayFiltered = sortByCondition(arrayFiltered);
    return setFilteredData(arrayFiltered);
  };

  useEffect(() => {
    if (filteredData.length) applyFiltersEffect();
  }, [filters, isFetching]);

  const setNameFilter = (filter) => {
    setFilters((prevFilters) => ({ ...prevFilters, filterByName: { name: filter } }));
  };

  const submitNumericFilter = ({ column, comparison, value }) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues, { column, comparison, value }],
    }));
  };

  const selectedFilters = filters.filterByNumericValues;

  const removeFilter = (column) => {
    const newFilters = filters.filterByNumericValues.filter(
      (e) => e.column !== column,
    );
    setFilters((prevFilters) => ({ ...prevFilters, filterByNumericValues: newFilters }));
  };

  const submitSort = (column, sort) => setFilters((prevFilters) => ({
    ...prevFilters,
    order: {
      column, sort,
    },
  }));

  const context = {
    submitSort,
    removeFilter,
    selectedFilters,
    submitNumericFilter,
    fetchData,
    fetchError,
    filteredData,
    isFetching,
    filters,
    setNameFilter,
    setData,
  };
  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsContext;
