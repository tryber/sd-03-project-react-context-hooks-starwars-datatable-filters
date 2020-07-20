import Comparision from './Comparision';

const orderName = (array) => (
  array.sort(function (a, b) {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  })
);

const OrderDes = (planets, name, numericValues, columnSort) => {
  if (columnSort === 'Name') {
    const filter = Comparision(planets, name, numericValues);
    return orderName(filter);
  }
  return Comparision(planets, name, numericValues).sort(
    (a, b) => b[columnSort] - a[columnSort],
  );
};

export default OrderDes;
