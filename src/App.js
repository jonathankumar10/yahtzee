import './App.css';
import Game from './Game.js';
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">
          <Game />
      </div>
    );
  }
}

export default App;
