import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FiltersContext from '../context/FiltersContext';

const FiltersProvider = ({ children }) => {
  const [column, setColumn] = useState('all');
  const [comparison, setComparison] = useState('');
  const [name, setName] = useState('');

  const [sortType, setSortType] = useState('ASC');
  const [sortColumn, setSortColumn] = useState('Name');

  const [numericValue, setNumericValue] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({ column: 'Name', sort: 'ASC' });

  const onChangeText = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const setColumnFunc = (selectedcolumn) => setColumn(selectedcolumn);
  const setComparisonFunc = (selectedComparison) => setComparison(selectedComparison);
  const setNumericValueFunc = (number) => setNumericValue(number);
  const filterByNumericValuesFunc = (array) => {
    setFilterByNumericValues(array);
  };

  const setSortColumnFunc = (columnSelected) => setSortColumn(columnSelected);
  const setSortTypeFunc = (type) => setSortType(type);

  const setOrderFunc = (newObj) => setOrder(newObj);

  const filtersContextObj = {
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
      order,
    },
    onChangeText,
    setColumnFunc,
    column,
    setComparisonFunc,
    comparison,
    setNumericValueFunc,
    numericValue,
    filterByNumericValuesFunc,
    setOrderFunc,
    sortType,
    setSortTypeFunc,
    sortColumn,
    setSortColumnFunc,
  };

  return (
    <FiltersContext.Provider value={filtersContextObj}>
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;

FiltersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
