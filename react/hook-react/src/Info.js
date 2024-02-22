import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name,setName] = useState('');

    useEffect(()=>{
        console.log('랜더링 완료');
        console.log({name});
    }, [] ) // [] 빈 배열을 추가해주면 마운트만 체크 해준다.

    useEffect(()=>{
        console.log('useEffect',{name});
        return () => {
            console.log('cleanup',{name}); // 업데이트 되기 직전의 값 
        }
    }, [name] ) // [] 배열 안에 특정 값을 넣어주면 해당 값이 업데이트 될때만 반응
    return (
        <div>
            <input type='text' onChange={(e)=>setName(e.target.value)}/><br/>
            name: {name}
        </div>
    );
};

export default Info;