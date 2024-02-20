import React, { useState } from 'react';

const EventPracticeFunction = () => {
    const [message,setMessage] = useState('');
    const [username,setUsername] = useState('');

    const handleChange = (e) => {
        {e.target.name === 'message' ? setMessage(e.target.value) : setUsername(e.target.value)};
        // setMessage(e.target.value);/
    }

    return (
        <div>
            <h1>이벤트 연습 - 함수</h1>

            <input type='text' name='message' placeholder='입력해주세요.'
                onChange={handleChange}
            /><br/>
            message: {message}
            <hr/>
            <input type='text' name='username' placeholder='입력해주세요.'
                onChange={handleChange}
            /><br/>
            message: {username}
        </div>
    );
};

export default EventPracticeFunction;