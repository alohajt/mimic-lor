import React, { Component } from 'react'
import PlayNow from '../components/PlayNow'
import AvailableOn from '../components/UnderShowPage/AvailableOn'

export default class ShowPage extends Component{
    state=[]

    render(){
        return(
            <div className="show-page">
                <img className="lee-sin" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/hero/lee-sin.png"/>
                <img className="miss-fortune" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/hero/miss-fortune.png"/>
                <PlayNow/>
                <AvailableOn/>
            </div>
        )
    }
}