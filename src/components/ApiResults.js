import useContextAPIPlanets from "../hooks/useContextAPIPlanets";
import NameFilterfunc from './NameFilterfunc';

const ApiResults = () => {
  const planetsAPIreq = useContextAPIPlanets('');
  return (typeof planetsAPIreq=== 'object' && NameFilterfunc(planetsAPIreq.results))
};

export default ApiResults;
