import React, { useEffect, useState } from 'react';
import proptypes from 'prop-types';
import getinfo from '../services/starWarsAPI';

const DataContext = React.createContext();

function TableData({ children }) {
  const [tableData, setTableData] = useState([]);
  useEffect(() => { getinfo().then((data) => setTableData(data.results)); }, []);

  tableData.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const context = { data: tableData };

  return (
    <DataContext.Provider value={context}>
      { children }
    </DataContext.Provider>
  );
}

export { TableData, DataContext };

TableData.propTypes = {
  children: proptypes.element.isRequired,
};
