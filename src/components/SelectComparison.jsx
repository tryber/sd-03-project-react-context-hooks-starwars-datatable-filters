import React from 'react';

function SelectComparison(props) {
  const { updateComparison } = props;

  return (
    <div className="control">
      <div className="select is-info">
        <select
          data-testid="comparison-filter"
          onChange={(e) => updateComparison(e.target.value)}
        >
          <option value="" />
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
          <option value="menor que">menor que</option>
        </select>
      </div>
    </div>
  );
}

export default SelectComparison;
