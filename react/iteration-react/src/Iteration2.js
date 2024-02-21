import React, { useState } from 'react';

const Iteration2 = () => {
    const [names,setNames] = useState(
        [
            {id:1,text:'javascript'},
            {id:2,text:'jQuery'},
            {id:3,text:'React'}
        ]
    );
    const [nextId,setNextId] = useState(names.length+1);
    const onClick = ()=>{
        setNames(names.concat({id:nextId,text:'Vue.js'}));
        setNextId(nextId+1);
    }
    const nameList = names.map((name)=><li key={name.id}>{name.text}</li>)
    return (
        <div>
            <button onClick={onClick}>add</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default Iteration2;