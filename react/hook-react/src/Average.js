import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage=(numbers)=>{
    console.log('평균 계산중...');
    if(numbers.length===0) return 0;
    const sum = numbers.reduce((a,b)=>a+b); // [1,2,3,4] 1+2 > (1+2)+3 > (1+2+3)+4 > 10
    return sum / numbers.length;
};

const set1 = new Set();

const Average = () => {
    const [list,setList] = useState([]);
    const [number,setNumber] = useState('');
    const inputEl = useRef(null);
    const onClick = useCallback(() => {
        setList(list.concat(parseInt(number)));
        setNumber('');
        inputEl.current.focus();
    },[number,list]);

    set1.add(onClick);
    console.log('set : ', set1);

    const avg = useMemo(()=>getAverage(list),[list]);
    return (
        <div>
            <input name='number' value={number} ref={inputEl} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={onClick}>등록</button><br/>
            number: {number}
            <ul>
                {list.map((value,index)=><li key={index}>{value}</li>)}
            </ul>
            평균 : {avg}
        </div>
    );
};

export default Average;