import React from 'react';
import PropTypes from 'prop-types';

import StarWarsContext from './StarWarsContext';

export default function Provider({ children }) {
  return (
    <StarWarsContext.Provider>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = { children: PropTypes.node.isRequired };
