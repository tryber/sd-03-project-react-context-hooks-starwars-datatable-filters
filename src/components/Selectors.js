import React from 'react';
import ColumnSelector from './ColumnSelector';
import ComparisonSelector from './ComparisonSelector';
import NumericSelector from './NumericSelector';
import SubmitButton from './SubmitButton';
import FiltersList from './FiltersList'

const Selectors = () => {

  return (
    <div>
      <form onSubmit={}>
        <section>
          <ColumnSelector />
          <ComparisonSelector />
          <NumericSelector />
        </section>
        <section>
          <SubmitButton />
        </section>
      </form>
      <FiltersList />
    </div>
  )
}

export default Selectors;
