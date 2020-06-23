import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import ColumnSelector from './ColumnSelector';
import ComparisonSelector from './ComparisonSelector';
import NumericSelector from './NumericSelector';
import SubmitButton from './SubmitButton';

const Selectors = () => {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { addFilter } = useContext(StarWarsContext);

  function handleSubmit(addFilter) {
    if (value === '') return false;
    addFilter(column, comparison, value);
    setColumn('');
    setComparison('');
    setValue('');
    return true;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(addFilter)}>
        <section>
          <ColumnSelector setColumn={setColumn} />
          <ComparisonSelector setComparison={setComparison} />
          <NumericSelector setValue={setValue} />
        </section>
        <section>
          <SubmitButton />
        </section>
      </form>
    </div>
  )
}

export default Selectors;
