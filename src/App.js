import React from 'react';
import CardList from "./component/cardlist/cardlist.component";
import './App.css';

/* class App extends Component {
  constructor(){
    super();
    console.dir("constructor is called first");
    this.state = {
      monsters : []
    }
  }

  componentDidMount(){
    console.dir("didmount is called second");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({
        monsters : json
      }))
  }

  

  render(){
    return(
      <div>
        {this.state.monsters.map(monster => <div key={monster.id}> Hey! {monster.name}</div>)}
        <CardList monsters={this.state.monsters}/>
      </div>
      
    )
  }

} */

export const App = (props) => {
  return(
    <CardList />
  )
};
