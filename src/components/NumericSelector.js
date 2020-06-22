import React from 'react';

const NumericSelector = () => {
  const { value } = this.state;
  return (
    <div>
      <input
        data-testid="value-filter"
        type="number"
        name="value"
        onChange={(e) => this.handleChange(e)}
        value={value}
      />
    </div>
  );
}

export default NumericSelector;
