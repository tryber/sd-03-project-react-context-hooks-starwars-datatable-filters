import React from 'react';
import PropTypes from 'prop-types';

import * as constants from '../services/constants';

const TableHeader = ({ headers, isMultiHeader }) => (
  <thead>
    {
      <tr className={isMultiHeader ? 'tr-multi-headers' : ''}>
        {headers.map((title) => (
          <th className={isMultiHeader ? 'th-multi-headers' : ''} key={title}>
            {constants.frendlyUser(title)}
          </th>
        ))}
      </tr>
    }
  </thead>
);

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  isMultiHeader: PropTypes.bool.isRequired,
};

export default TableHeader;
