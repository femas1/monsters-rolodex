import { Component } from 'react';

class CardList extends Component {
    render(){
        const { monsters } = this.props;

        return (
        <div>
                {monsters.map((monster) => (
                  <h1 key={monster.id}>{monster.name}</h1>
                ))}
        </div>
            
        )
    }
}

export default CardList;

// {filteredMonsters.map((monster) => {
//     return (
//         <div key={monster.id}>
//           <h1>{monster.name}</h1>
//         </div>
//       );
//   })}