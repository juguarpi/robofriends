import React, { Component } from 'react';
import Cardlist from '../component/cardlist';
import Searchbar from '../component/searchbar';
import Scroll from './scroll';
import './app.css'

class App extends Component {
  state = { 
    cardlist: [
      {name: "abc",
      email: "def"},
      {name: "hij",
      email: "klm"},
      {name: "opq",
      email: "rst"}
    ],
    searchbar: "" 
   }
  
   render() {
    const newCardlist = this.state.cardlist.filter(
      card => {return card.name.toLowerCase().includes(this.state.searchbar.toLowerCase())})
    
      return ( 
      <div className="container-fluid" >
        <h1 className="$primary"> Card List</h1>
        <Searchbar handleSearch = {this.handleSearch}/>
        <Scroll>
          <Cardlist cardlist={newCardlist}/>
        </Scroll>
      </div>
     );
  }

    componentDidMount(){
      console.log("did mount");
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>{
        console.log(users);
        console.log(typeof(users));      
        this.setState({cardlist: users})
      });
    }


  handleSearch=(event)=>{
    this.setState({searchbar: event.target.value})
  }

}  
export default App;
