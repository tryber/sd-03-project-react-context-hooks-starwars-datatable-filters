import React from 'react';

const ComparisonSelector = () => {
  return (
    <div>
      <span className="selector-label">Choose a comparison:</span>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={(e) => this.handleChange(e)}
        required
      >
        <option value="" />
        <option value="maior que">Maior que</option>
        <option value="menor que">Menor que</option>
        <option value="igual a">Igual a</option>
      </select>
    </div>
  );
}

export default ComparisonSelector;
