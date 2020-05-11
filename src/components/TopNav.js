import React, { Component } from 'react'

import Dropdown from './UnderHeader/Dropdown'
import News from './UnderHeader/News'
import Support from './UnderHeader/Support'

// import lor-logo from '../images/lor-logo.png'

export default class TopNav extends Component {
    state = []

    render(){
        return(
            <div className="top-nav">
                <Dropdown/>
                <div className="lor-logo">
                    <img alt="lor-logo"/>
                </div>
                <News/>
                <Support/>
            </div>
        )
    }
}