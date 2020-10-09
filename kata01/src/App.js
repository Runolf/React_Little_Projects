import React from 'react';
import './App.css';

class App extends React.Component{
  
  state = {
    Bands: [
      {id:"1", name: "Ye Banished Privateers", style: "pirates"},
      {id:"2", name: "Limp Bizkit", style: "Neo-Metal"}
    ]
  }

  render(){
    return (
      <div className="App">
        {this.state.Bands.map(band => {
            return <p>{band.name}</p>
          })
        }
      </div>
    );
  }
}

export default App;
