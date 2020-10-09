import React from 'react';
import './App.css';
import BandList from './Components/BandList/BandList';
class App extends React.Component{
  
  state = {
    Bands: [
      {id:"1", name: "Ye Banished Privateers", style: "pirates"},
      {id:"2", name: "Limp Bizkit", style: "Neo-Metal"},
      {id:"3", name: "Wardruna", style: "Neo-folk"},
      {id:"4", name: "Green Day", style: "Punk Rock"},
      {id:"5", name: "дора", style: "Russian Pop"},
      {id:"6", name: "Nightwish", style: "Goth-metal"},
      {id:"7", name: "Ignea", style: "Oriental-metal"}
    ]
  }

  render(){

    const style = {
      width:"500px",
      height: "1010px",
      float: "left",
      backgroundColor: "grey"
    }

    const styleHead = {
      width:"100%",
      height:"60px",
      backgroundColor:"black"
    }

    return (
      <div className="App">
          <div style={styleHead}></div>
          <div style={style}></div>
          <BandList bands={this.state.Bands}/>
      </div>
    );
  }
}

export default App;
