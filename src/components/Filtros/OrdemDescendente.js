import ComparaFiltro from './ComparaFiltro';

const orderName = (array) => (
  array.sort(function (a, b) {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  })
);

const OrdemDescendente = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = ComparaFiltro(planets, name, numericValues);
    return orderName(filter);
  }
  return ComparaFiltro(planets, name, numericValues).sort(
    (a, b) => b[columnSort] - a[columnSort],
  );
};

export default OrdemDescendente;
