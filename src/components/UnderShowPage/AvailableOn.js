import React, { Component } from 'react'

export default class extends Component{
    state = []

    render(){
        return (
            <div className="available-on">
                <p>Availble On</p>
                <image className="on-PC" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/pc-version.svg"/>
                <image className="on-app-store" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/app-store.svg"/>
                <image className="on-google-play" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/google-play_get.svg"/>

            </div>
        )
    }
}