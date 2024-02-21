import React, { Component } from 'react';
import MoveBox from './MoveBox';

class App extends Component {
  render() {
    return (
      <div>
        <MoveBox ref={(ref)=>{this.moveBox = ref}}/>
        <button onClick={()=>{this.moveBox.move(200,200)}}>AppMove</button>
      </div>
    );
  }
}

export default App;