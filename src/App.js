import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [
        {
          name: "Kevin De Bruyne",
          id: "asdf3f"
        },
        {
          name: "Sergio Aguero",
          id: "asdf4"
        },
        {
          name: "Raheem Sterling",
          id: "a34ffs"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.players.map(player => <h1 key={player.id}> {player.name} </h1>)
        }
      </div>
    );
  }
}


export default App;
