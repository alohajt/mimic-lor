import React, { Component } from 'react';
import './App.css';

import TopNav from './components/TopNav'
import Dropdown from './components/UnderHeader/Dropdown'
import PlayNow from './components/PlayNow'
import Footer from './components/Footer'

import ShowPage from './components/ShowPage'
import BeLegendary from './components/BeLegendary'
import ChooseYourChamp from './components/ChooseYourChamp'
import RegisterToPlay from './components/RegisterToPlay'

class App extends Component {
  state = []

  render(){
    return(
      <div className="webpage">
        <title>playruneterra</title>
        <TopNav />
        <ShowPage/>
        <BeLegendary />
        <Footer/>
      </div>
    )
  }
}


export default App;
