import React, { Component } from 'react'

export default class CombineRegions extends Component{
    state = []

    render(){
        return(
            <div className="combine-regions">
                <h2>COMBINE REGIONS TO CONQUER</h2>
                <p>Each region of Runeterra has its own style and strategy. What’s yours?</p>

                <div className="regions-container">
                    <div className="region-1">
                        <image src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt0325dea6a8157656/5e8505606ce2c42f242b78a3/ShadowIsles.png"/>
                        <p>SHADOW ISLES</p>
                        <p>Death and Scrifice</p>
                    </div>

                    <div className="region-2">
                        <image src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/bltd237873a03f819f8/5e850560cfad92647963527d/Ionia.png"/>
                        <p>IONIA</p>
                        <p>Storm of Steel</p>
                    </div>
                </div>
            </div>
        )
    }
}