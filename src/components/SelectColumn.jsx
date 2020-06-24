import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../context/StarWarsContext';

function SelectColumn(props) {
  const {
    filters: { filterByNumericValues },
    optionData,
  } = useContext(StarWarsContext);
  const { updateColumn } = props;

  const verifyAvaliableFilters = () => {
    const avaliableOptions = [];
    const shouldNotBeAvaliable = filterByNumericValues.map(
      ({ column }) => column
    );
    optionData.forEach((option) => {
      if (shouldNotBeAvaliable.every((notAoption) => notAoption !== option)) {
        avaliableOptions.push(option);
      }
    });

    return avaliableOptions;
  };

  return (
    <div className="control">
      <div className="select is-info">
        <select
          data-testid="column-filter"
          onChange={(e) => updateColumn(e.target.value)}
        >
          <option value="" />
          {verifyAvaliableFilters().map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectColumn;

SelectColumn.propTypes = {
  updateColumn: PropTypes.func.isRequired,
};
