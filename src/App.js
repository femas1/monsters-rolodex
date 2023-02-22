import { Component } from 'react';


import './App.css';

class App extends Component {
 constructor() {
  super();

  this.state = {
    monsters: [
      {
        name: 'Linda',
        id: '12386e21'
      },
      {
        name: 'Frank',
        id: '12386d21'
      },
      {
        name: 'Andrei',
        id: '12386e22'
      },
      {
        name: 'Frank',
        id: '12386e33'
      }
    ]   
  }
 }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
        })}
      </div>
    );
  }
}

export default App;
