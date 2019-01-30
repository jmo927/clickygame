import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Game from "./components/Game/Game"

const styles = {
  heading: {
    textAlign: "center"
  },
  description: {
    textAlign: "center"
  }
};

class App extends Component {
  render() {
    return (
      <>
      <h1 id="title" style={styles.heading}>Harry Potter Memory Game</h1>
      <p style={styles.description}>Click a pic to earn a point, but click it again and you lose.</p>
      <Game />
      </>
    );
  }
}

export default App;
