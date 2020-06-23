import React from 'react';
import PropTypes from 'prop-types';
import { planetShape } from '../services/constants';

const TableRow = ({ planet, properties, isMultiHeader, index }) => (
  <tr style={{ backgroundColor: index % 2 === 0 ? 'red' : 'blue' }}>
    {properties.map((feature) => (
      <td
        className={isMultiHeader ? 'td-multi-headers' : ''}
        data-testid={`planet-${feature}`}
        key={`${planet.name}-${feature}`}
      >
        {planet[feature]}
      </td>
    ))}
  </tr>
);

TableRow.propTypes = {
  planet: PropTypes.shape(planetShape()).isRequired,
  properties: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isMultiHeader: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default TableRow;
