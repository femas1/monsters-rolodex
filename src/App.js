import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

const App = () => {

  return(
    <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        {/* <SearchBox 
          className='monsters-search-box'
          onSearchChange={this.onSearchChange}
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} /> */}
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({ monsters: users }));
//   }

//   onSearchChange = event => {
//     this.setState({ searchField: event.target.value });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );

//     return (
      
//     );
//   }
// }

export default App;
