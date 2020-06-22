import React from 'react';

const ColumnSelector = () => {
  const columns = ['rotational_period', 'orbital_period', 'diameter', 'surface_water', 'population']
  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={(e) => this.handleChange(e)}>
        <option value="" />
        {options.map((column) => <option value={column} key={column}>{column}</option>)}
      </select>
    </div>
  );
}

export default ColumnSelector;
