import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const formatContext = createContext(false);

function FormatProvider({ children }) {
  const isMultiHeaderState = useState(true);

  return (
    <formatContext.Provider value={isMultiHeaderState}>
      {children}
    </formatContext.Provider>
  );
}

FormatProvider.propTypes = { children: PropTypes.node.isRequired };

export default FormatProvider;
