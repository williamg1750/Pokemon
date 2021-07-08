import React, { Component } from 'react';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Pokedex /> */}
        <Pokegame />
      </div>
    );
  }
}

export default App;
