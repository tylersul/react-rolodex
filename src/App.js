import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";


class App extends Component {
  constructor() {
    super();

    // "This" is a special keyword in JS that reference context in which it is invoked
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
    // Destructuring
    // Equivalent to two separate const declarations, just quicker
    const { players, searchField } = this.state;

    const filteredPlayers = players.filter(player => 
      player.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <SearchBox 
          placeholder="search players"
          handleChange={e => {
                      // Synthetic event to detect when an action occurs on the DOM
          // Camel Case indicates this is a React method, not pure HTML
            this.setState({ searchField: e.target.value }, () => 
              console.log(this.state)
            );
          }}
        />
        <CardList players = {filteredPlayers} />
      </div>
    );
  }
}


export default App;
