import React from 'react';
import './App.css';
import BandList from './Components/BandList/BandList';
class App extends React.Component{
  
  state = {
    Bands: [
      {id:"1", name: "Ye Banished Privateers", style: "pirates"},
      {id:"2", name: "Limp Bizkit", style: "Neo-Metal"},
      {id:"3", name: "Wardruna", style: "Neo-folk"}
    ]
  }

  render(){
    return (
      <div className="App">
          <BandList bands={this.state.Bands}/>
      </div>
    );
  }
}

export default App;
