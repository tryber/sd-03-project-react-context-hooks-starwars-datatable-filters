import React, { useContext } from 'react';
/* import { connect } from 'react-redux';
import { removeNumericFilter } from '../action/index'; */
import ContextStarWars from '../context/contextStarWars';

function TagNumericFilters() {
  const { removeFilterNumeric,
    filters: {
      filterByName: { name },
      filterByNumericValues: numericValues,
      order: { sort, column: columnSort },
    },   } = useContext(ContextStarWars);
  const  filters = numericValues;

  function removeButton(e) {
    removeFilterNumeric(e.target.name)
  }

  return (
    <div>
      {filters.map((element) => (
        <div data-testid="filter" key={element.column}>
          {element.column}
          <button
            name={element.column}
            data-testid="filter"
            onClick={(event) => removeButton(event)}
            type="button"
          >
                x
          </button> 
        </div>
      )
      ) }
    </div>
  )
}

export default TagNumericFilters


/* export class TagNumericFilters extends React.Component {
  render() {
    const { filters } = this.props;
    const { removeFilter } = this.props;

    return (
      <div>
      {  {filters.map((element) => (
          <div data-testid="filter" key={element.column}>
            {element.column}
            <button
              name={element.column}
              data-testid="filter"
              onClick={(event) => removeFilter(event.target.name)}
              type="button"
            >
                  x
            </button> }
            PLACEHOLDER TAGNUMERICFILTER
          </div>
        )
        )
      }
      </div>
    );
  }
}

/* const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  removeFilter: (event) => dispatch(removeNumericFilter(event)),
});

TagNumericFilters.propTypes = {
  filters: PropTypes.string,
  removeFilter: PropTypes.instanceOf(Function),
};

TagNumericFilters.defaultProps = {
  filters: '',
  removeFilter: '',
};
 
//export default connect(mapStateToProps, mapDispatchToProps)(TagNumericFilters);
export default TagNumericFilters; */
