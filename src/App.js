import { Component } from 'react';


import './App.css';

class App extends Component {
 constructor() {
  super();

  this.state = {
    monsters: [],
    searchField: ''
  };
  console.log('constructor')
 }

componentDidMount() {
  console.log('componentDidMount')
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState(
      () => {
      return {monsters: users}
    },
      () => {
        console.log(this.state);
      }))
}

  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
            className='search-box' 
            type='search' 
            placeholder='Search monsters' 
            onChange={
              (e) => {
               
                const searchField = e.target.value.toLocaleLowerCase();
                this.setState(() => {
                  return { searchField };
                })
              }
        }/>
        {filteredMonsters.map((monster) => {
          return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
        })}
      </div>
    );

  }
}

export default App;
