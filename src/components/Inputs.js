import React from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Inputs() {
  const context = React.useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="namePlanet">
        <input
          data-testid="name-filter"
          name="namePlanet"
          type="text"
          onChange={(event) => context.setNameFunc(event.target.value)}
        />
      </label>
    </div>
  );
}

export default Inputs;
