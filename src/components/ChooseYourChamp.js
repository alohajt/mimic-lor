import React, { Component } from 'react'

export default class ChooseYourChamp extends Component {
    state=[]

    render(){
        return (
            <div className="choose-your-champ">
                <h4>CHOOSE YOUR CHAMPIONS</h4>
                <p>Who will you take into the fight?</p>

                <div className="champ-1">
                    <image src="https://dd.b.pvp.net/latest/set2/en_us/img/cards/02BW022-full.png"/>
                    <image src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blte26c7f0322ad2dac/5ea0c17d45a2a97194a1e493/Bilgewater.png"/>
                    <p>Bilgewater</p>
                    <p>MISS FORTUNE</p>
                    <p>Risk and Reward</p>
                    <p>Shoot first and open fire on the opposing board, then wipe them out for good with wave after wave of damage.</p>
                </div>

                <div className="champ-2">
                    <image src="https://dd.b.pvp.net/latest/set1/en_us/img/cards/01IO015-full.png"/>
                    <image src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/bltd237873a03f819f8/5e850560cfad92647963527d/Ionia.png"/>
                    <p>Ionia</p>
                    <p>YASUO</p>
                    <p>Storm of Steel</p>
                    <p>Strike swiftly and stop enemies in their tracks. Unleash a whirlwind to cut them down before they can draw breath.</p>

                </div>
            </div>
        )
    }
}