import React, { useContext } from 'react';
import contextAPI from '../context/contextAPI';

function SeachImputs() {
  const { changeFilterName } = useContext(contextAPI);
  return (
    <div>
      <form>
        <input
          data-testid="name-filter"
          type="text"
          onChange={(elem) => changeFilterName(elem.target.value)}
          placeholder="Digite um nome"
        />
      </form>
    </div>
  );
}

export default SeachImputs;
