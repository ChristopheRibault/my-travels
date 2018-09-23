import React, { Component } from 'react';
import logo from './travel-logo.png';
import './App.css';

import Travel from "./Travel"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
        	dest="Salto Angel"
        	country="Venezuela"
        	image="https://c1.staticflickr.com/4/3664/3666772290_84d4e87ff5_b.jpg"
        	distance="7,800 km"
        />
        <Travel
        	dest="Machu Picchu"
        	country="Peru"
        	image="https://upload.wikimedia.org/wikipedia/commons/1/15/Machu_Picchu_general_view.jpg"
        	distance="10,000 km"
        	/>
      </div>
    );
  }
}

export default App;
