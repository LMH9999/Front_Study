import React from 'react';

const App = () => {
  const name = 'React1';
  const nameBlank = undefined;
  return (
    <>
      <h1
        style={{
          backgroundColor:'black',
          color:'aqua',
          fontSize:'48px'
        }}
      >{name} hi!</h1>
      <h2 className='react'>Hello React</h2>
      { name === 'React' ? <h3>리액트</h3> : '리액트 아닙니다' }<br/>
      { name === 'React' ? '리액트' : null }<br/>
      { name === 'React' && '리액트'}<br/>
      { nameBlank || 'default value'}
    </>
  );
};

export default App;