// import { receiveData, requestData } from '../actions';

const fetchPlanets = (url) => (
  fetch(url)
    .then((rawResponse) => rawResponse.json())
    .then((json) => { return Promise.resolve(json) })
    .catch((json) => { return Promise.reject(json) })
    // .then((json) => dispatch(receiveData(json)));
);

export default fetchPlanets;
