import React from 'react';


handleSubmit() {
  const {
    column, comparison, value,
  } = this.state;
  const { addFilter } = this.props;
  if (value === '') return false;
  addFilter(column, comparison, value);
  this.setState({
    column: '',
    comparison: '',
    value: '',
  });
  return true;
}


const SubmitButton = () => {
  return (
    <input
      type="button"
      value="Adicionar Filtro"
      onClick={() => this.handleSubmit()}
      data-testid="button-filter"
    />
  );
}

export default SubmitButton;
