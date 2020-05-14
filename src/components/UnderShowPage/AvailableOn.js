import React, { Component } from 'react'

export default class extends Component{
    state = []

    render(){
        return (
            <div className="available-on">
                <p className="available-on-text">Availble On</p>
                <img className="on-PC" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/pc-version.svg"/>
                <img className="on-app-store" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/app-store.svg"/>
                <img className="on-google-play" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/google-play_get.svg"/>

            </div>
        )
    }
}