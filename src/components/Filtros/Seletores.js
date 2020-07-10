import React from 'react';
import AtualizaColuna from './AtualizaColuna';

export const getColunas = (mudarColuna, valoresNumericos, coluna) => {
  const select = AtualizaColuna(valoresNumericos);
  return (
    <select
      onChange={(e) => mudarColuna(e)}
      data-testid="column-filter"
      value={coluna}
    >
      {select.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const getRadios = (mudarImput) => (
  <div>
    <input
      defaultChecked
      data-testid="column-sort-input-asc"
      type="radio"
      id="ASC"
      name="order"
      value="ASC"
      onChange={(e) => mudarImput(e)}
    />
    <label htmlFor="ASC">ASC</label>
    <input
      data-testid="column-sort-input-desc"
      type="radio"
      id="DESC"
      name="order"
      value="DESC"
      onChange={(e) => mudarImput(e)}
    />
    <label htmlFor="DESC">DESC</label>
  </div>
);

export const getComparar = (mudarComparar, comparar) => {
  const comparationValues = ['', 'maior que', 'menor que', 'igual a'];
  return (
    <select
      onChange={(e) => mudarComparar(e)}
      data-testid="comparison-filter"
      value={comparar}
    >
      {comparationValues.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
