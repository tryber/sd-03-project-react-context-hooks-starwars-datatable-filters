import { useEffect, useState } from 'react';

const useDataHandler = (request) => {
  const [dataTable, setDataTable] = useState([]);
  const [errData, setErrData] = useState('');
  const [isRequesting, setIsRequesting] = useState(false);

  useEffect(() => {
    // Make request to endpoint and handles isRequesting
    const requestDataTable = () => {
      setIsRequesting(true);
      request().then(
        // success
        (res) => {
          setDataTable(res.results);
          setIsRequesting(false);
        },
        // Failure
        (res) => {
          setErrData(res.message);
          setIsRequesting(false);
        },
      );
    };
    requestDataTable();
    // component will unmount
    return () => {
      setIsRequesting(false);
      setDataTable([]);
    };
  }, [request]);

  return {
    dataTable,
    errData,
    isRequesting,
  };
};

export default useDataHandler;
