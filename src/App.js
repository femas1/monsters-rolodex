import { Component } from 'react';


import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor() {
  super();

  this.state = {
    name: {firstName: 'Yihua', lastName: 'Zhang'},
    company: 'ZTM'
  }
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}.
          </p>
         <button onClick={() => {
            this.setState(() => {
                return {
                  name: {firstName: 'Andrei', lastName: 'Neagoie'}, company: 'CVS'
                }
            }, 
            // ONCE THE STATE IS UPDATED (FIRST FUNCTION), THE SECOND FUNCTION (optional)IS RUN
            () => {
              console.log(this.state);
            }
            )
            
         }}>
            Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
