import React, { useContext } from 'react';
import ContextStarWars from '../context/contextStarWars';

function InputFilter() {
  const { SetfilterByName } = useContext(ContextStarWars);

  function filterByNameInput(event) {
    SetfilterByName(event.target.value);
  }

  return (
    <div>
      <input
        id="filter_name"
        placeholder="Filtro por nome de Planeta"
        onChange={(e) => filterByNameInput(e)}
        data-testid="name-filter"
        size="50"
      />
    </div>
  );
}

export default InputFilter;

/* import React, { Component } from 'react';

export class InputFilter extends Component {
  constructor(props) {
    super(props);
      this.filterByName = this.filterByName.bind(this);
   }

  filterByName(event) {
    const { filter } = this.props;
    filter(event.target.value);
  }

  render() {
    return (
      <div>
        placeholder inpultfilter
        <input
          id="filter_name"
          placeholder="Filtro por nome de Planeta"
          onChange={(e) => this.filterByName(e)}
          data-testid="name-filter"
          size="50"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  filter: (e) => dispatch(filterPlanet(e)),
});

InputFilter.propTypes = {
  filter: PropTypes.instanceOf(Function),
};

InputFilter.defaultProps = {
  filter: '',
};

 export default connect(null, mapDispatchToProps)(InputFilter);

export default InputFilter;
*/
