import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import './Table.css';
import APIcontext from '../Context/APIcontext';

function InputNamePlanet() {
  const { saveFilter } = useContext(APIcontext);

  return (
    <form>
      <input
        placeholder="Filter Name"
        type="text"
        data-testid="name-filter"
        name="name"
        onChange={(e) => saveFilter({name: e.target.value})}
      />
    </form>
  );
}

InputNamePlanet.propTypes = {
  saveFilter: PropTypes.func.isRequired,
};

InputNamePlanet.defaultProps = {
  saveFilter: PropTypes.func.isRequired,
};

export default InputNamePlanet;
