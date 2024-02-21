import React, { Component } from 'react';

class MoveBox extends Component {
    move = (x,y) =>{
        this.box.style.left = x+'px';
        this.box.style.top = y+'px';
    }
    render() {
        const style = {
            border:'1px solid black',
            height:'300px',
            width:'300px',
            position:'relative'
        };
        const innerStyle = {
            width:'100px',
            height:'100px',
            backgroundColor:'red',
            position:'absolute',
            left:'100px',
            top:'100px'
        };
        return (
            <>
                <div style={style}>
                    <div style={innerStyle} ref={(ref)=>{this.box = ref}}></div>
                </div>
                <button onClick={()=>{this.move(0,0)}}>move</button>
            </>
        );
    }
}

export default MoveBox;