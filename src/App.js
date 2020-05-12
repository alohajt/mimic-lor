import React, { Component } from 'react';
import './App.css';

import TopNav from './components/TopNav'
import PlayNow from './components/PlayNow'

import ShowPage from './components/ShowPage'
import BeLegendary from './components/BeLegendary'

class App extends Component {
  state = []

  render(){
    return(
      <div>
        <title>playruneterra</title>
        <TopNav />
        <ShowPage/>
        <BeLegendary/>
      </div>
    )
  }
}


export default App;
