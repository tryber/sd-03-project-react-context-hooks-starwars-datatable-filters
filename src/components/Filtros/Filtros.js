import React from 'react';
import FiltroPorNome from './FiltroPorNome';
import FiltroPorValor from './FiltroPorValor';
import FiltroPorOrdem from './FiltroPorOrdem';
import RemoveFiltro from './RemoveFiltro';

function Filtros() {
  return (
    <div>
      <FiltroPorNome />
      <FiltroPorValor />
      <FiltroPorOrdem />
      <RemoveFiltro />
    </div>
  );
}

export default Filtros;
