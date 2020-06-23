import { createContext } from 'react';

const initialState = {
  data:[],
}

const StarWarsContext = createContext(initialState);

export default StarWarsContext;
