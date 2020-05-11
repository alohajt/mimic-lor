import React, { Component } from 'react'
// import riot-fist-container-white-black from '.../images/riot-fist-container-white-black.png';


export default class Dropdown extends Component{
    state = []

    

    render(){
        return(
            <div className="riot-games-dropdown" onClick={handleClick}>
                <img alt="riot games logo" />   
            </div>
        )
    }
}