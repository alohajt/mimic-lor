import React, { Component } from 'react';
import './App.css';

import TopNav from './components/TopNav'
import Dropdown from './components/UnderHeader/Dropdown'
import PlayNow from './components/PlayNow'

import ShowPage from './components/ShowPage'
import BeLegendary from './components/BeLegendary'
import ChooseYourChamp from './components/ChooseYourChamp'

class App extends Component {
  state = []

  render(){
    return(
      <div>
        <title>playruneterra</title>
        <TopNav />
        <Dropdown/>
        <ShowPage/>
        <BeLegendary/>
        <ChooseYourChamp/>
      </div>
    )
  }
}


export default App;
