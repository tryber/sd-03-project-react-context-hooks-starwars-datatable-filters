import React from 'react';
import PropTypes from 'prop-types';
import { planetShape } from '../services/constants';

const generateTDStyle = (isMultiHeader) => (
  isMultiHeader ? ({
    fontSize: '1.3em',
    paddingLeft: '50%',
    position: 'relative',
    wordWrap: 'break-word',
    display: 'block',
  }) : {}
);

const generateTRStyle = (isMultiHeader, num) => (
  isMultiHeader
  ? ({ display: 'block', flexBasis: '60%', backgroundColor: num % 2 === 0 ? 'red' : 'blue' })
  : {}
);

const TableRow = ({ planet, properties, isMultiHeader, index}) => (
  <tr
    style={generateTRStyle(isMultiHeader, index)}
  >
    {properties.map((feature) => (
      <td
        style={generateTDStyle(isMultiHeader)}
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
};

export default TableRow;
