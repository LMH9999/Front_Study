import React, { useCallback, useState } from 'react';
import './TodoInsert.css'
import {MdAdd} from 'react-icons/md'

const TodoInsert = ({onInsert}) => {
    const [value,setValue] = useState('');
    const onChange = useCallback((e)=>{
            setValue(e.target.value);
        },[]
    )
    const onSubmit = useCallback(e=>{
        console.log(value);
        value!=='' && onInsert(value); // 공백 입력 방지
        // onInsert(value); // App.js -> onInsert text = value
        setValue('');
        e.preventDefault(); // onsubmit으로 데이터 추가 후 새로운 페이지로 새로고침 방지...
    },[onInsert,value]);
    return (
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input placeholder='할 일을 입력하세요.' value={value} onChange={onChange}></input>
            <button type='submit'><MdAdd/></button>
        </form>
    );
};

export default TodoInsert;