export const CREATE_NUMERIC_FILTER = 'CREATE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const ACTIVATE_ORDER = 'ACTIVATE_ORDER';
export const TYPE_NAME = 'TYPE_NAME';

export const typeName = (text) => ({ type: TYPE_NAME, text });

export const createFilter = (numericFilter) => ({ type: CREATE_NUMERIC_FILTER, numericFilter });

export const removeFilter = (id) => ({ type: REMOVE_FILTER, id });

export const activateOrder = (sortFilter) => ({ type: ACTIVATE_ORDER, sortFilter });
