import React, { Component } from 'react';
import Login from "../auth/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to Web Portal Online Deals</h1>
        </header>
        <div className="App-intro">
         <Login/>
        </div>
      </div>
    );
  }
}

export default App;
