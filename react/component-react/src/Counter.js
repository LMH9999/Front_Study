import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number:0,
        fixNumber:7
    }
    render() {
        const {number, fixNumber} = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>{fixNumber}</h2>
                <button onClick={() => {
                    this.setState({number:number+1})
                }}>+1</button>
            </div>
        );
    }
}

export default Counter;