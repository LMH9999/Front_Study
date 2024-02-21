import React from 'react';

const Iteration = () => {
    const names = ['javascript','jQuery','React']
    const nameList = names.map((name,index)=><li key={index}>{name}</li>);
    // ['<li>javascript</li>','<li>jQuery</li>','<li>React</li>']

    return (
        <ul>
           {nameList} 
        </ul>
    );
};

export default Iteration;