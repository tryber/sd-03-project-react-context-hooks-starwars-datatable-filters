import React, { createContext, useState } from 'react';

export const formatContext = createContext(false);

function FormatProvider({ children }) {
  const isMultiHeaderState = useState(true);

  return (
    <formatContext.Provider value={isMultiHeaderState}>
      {children}
    </formatContext.Provider>
  );
}

export default FormatProvider;
