import React from 'react';
import MyComponent from './MyComponent';
import MyComponentClass from './MyComponentClass';
import Counter from './Counter';
import Say from './Say';

const App = () => {
  return (
    <div>
      <MyComponent name={3}/>
      <hr/>
      <MyComponent name="SideBar"/>
      <hr/>
      <MyComponent><s>리액트</s>입니다.</MyComponent>
      <hr/>
      <MyComponentClass name="class"/>
      <hr/>
      <Counter/>
      <Say/>
    </div>
  );
};

export default App;