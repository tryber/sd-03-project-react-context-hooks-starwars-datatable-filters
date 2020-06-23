import React, {useContext, useState} from 'react';
import StarWarsContext from "../context/StarWarsContext";
import useContextAPIPlanets from "../hooks/useContextAPIPlanets";
import NameFilterfunc from './NameFilterfunc';
import Header from "./Header";

const Table = () => {
  const planetsAPIreq = useContextAPIPlanets('');
  const [text, setText] = useState('');

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (typeof planetsAPIreq=== 'object'&& 
  <div>
    <input
      data-testid='name-filter'
      placeholder='Digite o nome de um planeta...'
      type="text"
      value={text}
      onChange={e => onTextChange(e)} />
    <table>
      <Header/>
      {NameFilterfunc(planetsAPIreq.results, text)}
    </table>
  </div>)
};

export default Table
