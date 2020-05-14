import React, { Component } from 'react'
import PlayNow from '../components/PlayNow'
import AvailableOn from '../components/UnderShowPage/AvailableOn'

export default class ShowPage extends Component{
    state=[]

    render(){
        return(
            <div className="show-page">
                <img className="riot-logo" src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8ba1ec1b0013e362/5ea53af4ae23d30cd1dfb3e4/lor-logo.png?&height=50&disable=upscale" />
                
                <img className="lee-sin" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/hero/lee-sin.png"/>
                <img className="miss-fortune" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/hero/miss-fortune.png"/>
                <PlayNow/>
                <AvailableOn/>
            </div>
        )
    }
}