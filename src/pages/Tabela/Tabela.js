import React from 'react';
import TabelaHead from '../../components/Tabela/THead';
import TabelaBody from '../../components/Tabela/TBody';

function Table() {
  return (
    <div>
      <table>
        <TabelaHead />
        <TabelaBody />
      </table>
    </div>
  );
}

export default Table;
