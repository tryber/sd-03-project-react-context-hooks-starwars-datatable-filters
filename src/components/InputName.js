import React from 'react';


handleChange(e) {
  const { name, value } = e.target;
  this.setState({ [name]: value });
}

const InputName = () => {
  const { filterNames } = this.props;
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={(e) => filterNames(e.target.value)}
      />
    </div>
  );
}

export default InputName;
