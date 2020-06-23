import React from "react";

function FilterButton(props) {
  const { clickParam: { column, comparison, value } } = props;
  
  return (
    <div className="field">
      <div className="control">
        <button
          className="button is-info"
          type="button"
          data-testid="button-filter"
          onClick={() => console.log(column, comparison, value)}
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default FilterButton;
