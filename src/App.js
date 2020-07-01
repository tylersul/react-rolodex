import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component.jsx";


class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      searchField: ""
    }
  }

  // Component Did Mount available when React renders to Virtual DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")   // fetch example api response 
    .then(response => response.json())                    // convert response to json
    .then(users => this.setState({ players: users }));    // set the state to the users in the response
  }

  // Render method is available through extending into Component
  render() {
    return (
      <div className="App">
        <input 
          type="search" 
          placeholder="search players" 
          onChange={e => 
            this.setState({ searchField: e.target.value }, () => console.log(this.state))}/>
        <CardList players = {this.state.players} />
      </div>
    );
  }
}


export default App;
