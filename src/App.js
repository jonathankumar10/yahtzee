import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  // call game component in render
  render() {
    return (
      <div className='App'>
        <Game />
      </div>
    );
  }
}

export default App;
