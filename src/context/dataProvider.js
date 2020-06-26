import React from 'react';
import { createContext, useState } from 'react';

export const DataContext = createContext(null);

// In the same context file we will define a default function that the data are initialized and it's children will have data provided.

function DataProvider({ children }) {
  const [ loading, setLoading ] = useState(true);
  const [ planets, setPlanets ] = useState([]);
  const [ error, setError ] = useState('');
  
  const dataContext = { loading, setLoading, planets, setPlanets, error, setError };

  return (
    <DataContext.Provider value={dataContext}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
