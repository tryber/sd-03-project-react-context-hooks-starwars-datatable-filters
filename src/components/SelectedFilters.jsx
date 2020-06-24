import React, { useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";

function SelectedFilters() {
  const { setDeleteFilter, filters: { filterByNumericValues } } = useContext(StarWarsContext);

  const mapSpan = () => {
    return filterByNumericValues.map((filter) => (
      <span
        className="tag is-dark is-normal"
        data-testid="filter"
        key={filter.column}
      >
        {filter.column}-{filter.comparison}-{filter.value}
        <button
          className="delete is-normal"
          id={filter.column}
          onClick={(e) => setDeleteFilter(e.target.id)}
        >
          X
        </button>
      </span>
    ));
  };

  return <span>{mapSpan()}</span>;
}

export default SelectedFilters;
