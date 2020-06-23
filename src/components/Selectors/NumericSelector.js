import React from 'react';

const NumericSelector = ({ value, setValue }) => {
  return (
    <div>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={({ target: { value } }) => setValue(value)}
        value={value}
      />
      <span className="highlight" />
      <span className="bar" />
      <label htmlFor="number-bar">Type a number</label>
    </div>
  );
}

export default NumericSelector;
