import React from 'react';
import './App.css';
import BandList from './Components/BandList/BandList';
import DATAS from './datas';
class App extends React.Component{
  
  state = {
    Bands: DATAS
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
