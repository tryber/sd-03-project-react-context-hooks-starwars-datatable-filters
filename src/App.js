import React from 'react';
import Table from './components/Table';

import Provider from './Context/APIProvider';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <Table />
      </Provider>
    );
  }
}

export default App;
