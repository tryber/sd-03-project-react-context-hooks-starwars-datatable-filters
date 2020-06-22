import React, { createContext, useState, useEffect } from 'react';
import propTypes from 'prop-types';

const StarWarsContext = createContext();

const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
const initalFilterState = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

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

  const applyFiltersEffect = () => {
    const nameFiltered = filterByText(data, filters.filterByName.name);
    setFilteredData(filteredByNumeric(nameFiltered));
  };
  // const cleanUpFilters = () => setFilters(initalFilterState);


  useEffect(() => {
    applyFiltersEffect();
  }, [filters, isFetching]);

  const setNameFilter = (filter) => {
    console.log(filter);
    setFilters(({ filterByName: { name: filter } }));
  };
  const submitNumericFilter = ({ column, comparison, value }) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues, { column, comparison, value }],
    }));
  };
  const context = {
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
      {console.log(context)}
      {children}
    </StarWarsContext.Provider>
  );
};

SWProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default StarWarsContext;
