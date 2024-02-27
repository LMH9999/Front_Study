import React, { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data,setData] = useState(null);
  const onClick = async () =>{
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=2a3f86554a2140cab6fae81c466891fd');
    setData(response)
  };

  return (
    <div>
      <button onClick={onClick}>불러오기</button>
      <div>
        {data && <textarea value={JSON.stringify(data)}/>}
      </div>
    </div>
  );
};

export default App;