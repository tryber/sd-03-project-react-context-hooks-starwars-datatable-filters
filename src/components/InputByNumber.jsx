import React from 'react';

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
          onChange={(e) => updateNumber(e.target.value)}
        />
      </p>
    </div>
  );
}

export default InputByNumber;
