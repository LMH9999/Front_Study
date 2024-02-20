import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username:"", message: ""
    }
    handleChange = (e)=>{
        console.log(e.currentTarget.name);
        this.setState({[e.target.name]:e.target.value})
    }


    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>

                <input type='text' name='message' placeholder='입력해주세요.'
                    onChange={this.handleChange}
                /><br/>
                message: {this.state.message}
                <hr/>
                <input type='text' name='username' placeholder='입력해주세요.'
                    onChange={this.handleChange}
                /><br/>
                message: {this.state.username}
            </div>
        );
    }
}

export default EventPractice;