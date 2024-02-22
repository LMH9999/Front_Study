import React, { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import CountReducer from './CountReducer';
import Average from './Average';

const App = () => {
  const [visible,setVisible] = useState(false);
  return (
    <div>
      <Counter/>
      <br/>
      <hr/>
      <br/>
      <Info/>
      <br/>
      <hr/>
      <br/>
      <button onClick={()=>setVisible(!visible)}>{visible?'숨기기':'보이기'}</button>
      <br/>
      <br/>
      <hr/>
      <CountReducer/>
      <br/>
      <hr/>
      <br/>
      <Average/>
    </div>
  );
};

export default App;
