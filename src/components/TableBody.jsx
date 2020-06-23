import React from 'react';
import PropTypes from 'prop-types';
import { planetShape } from '../services/constants';

const TableBody = ({ properties, isMultiHeader, items }) => (
  <tbody>
    {items.map((item, index) => (
      <tr
        key={item.name}
        style={{ backgroundColor: index % 2 === 0 ? '#c00' : '#00c' }}
      >
        {properties.map((feature) => (
          <td
            className={isMultiHeader ? 'td-multi-headers' : ''}
            data-testid={`planets-${feature}`}
            key={`${item.name}-${feature}`}
          >
            {item[feature]}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

TableBody.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isMultiHeader: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape(planetShape).isRequired).isRequired,
};

export default TableBody;
