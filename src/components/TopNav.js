import React, { Component } from 'react'

import Dropdown from './UnderHeader/Dropdown'
import News from './UnderHeader/News'
import Support from './UnderHeader/Support'
import PlayNow from './PlayNow';

// import lor-logo from '../images/lor-logo.png'

export default class TopNav extends Component {
    state = []

    render(){
        return(
            <div className="top-nav">
                
                <Dropdown/>
                <img onClick={()=>{window.location.href="https://playruneterra.com/en-us/"}}
                src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8ba1ec1b0013e362/5ea53af4ae23d30cd1dfb3e4/lor-logo.png?&height=50&disable=upscale"
                />
                <div className="lor-logo">
                    <img alt="lor-logo"/>
                </div>
                <News/>News
                <Support/>SUPPORT
                <PlayNow/>PLAY NOW
            </div>
        )
    }
}