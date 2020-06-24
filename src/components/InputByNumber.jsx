import React from 'react';
import PropTypes from 'prop-types';

function InputByNumber(props) {
  const { updateNumber } = props;
  return (
    <div>
      <p className="control">
        <input
          className="input is-info"
          type="number"
          placeholder="Informe um número"
          data-testid="value-filter"
          onChange={(e) => updateNumber(parseInt(e.target.value))}
        />
      </p>
    </div>
  );
}

export default InputByNumber;

InputByNumber.propTypes = {
  updateNumber: PropTypes.func.isRequired,
}
