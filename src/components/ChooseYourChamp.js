import React, { Component } from 'react'

export default class ChooseYourChamp extends Component {
    state=[]

    render(){
        return (
            <div className="choose-your-champ">
                <h4>CHOOSE YOUR CHAMPIONS</h4>
                <p>Who will you take into the fight?</p>

                <div className="champ-option">
                    <img className="full-champ-image" src="https://dd.b.pvp.net/latest/set2/en_us/img/cards/02BW022-full.png"/>
                    <img className="region-icon" src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blte26c7f0322ad2dac/5ea0c17d45a2a97194a1e493/Bilgewater.png"/>
                    <span className="title-info">
                        <p>Bilgewater</p>
                        <p>MISS FORTUNE</p>
                        <p>Risk and Reward</p>
                    </span>
                    <p>______________</p>
                    <p>Shoot first and open fire on the opposing board, then wipe them out for good with wave after wave of damage.</p>
                </div>

                <div className="champ-option">
                    <img className="full-champ-image" src="https://dd.b.pvp.net/latest/set1/en_us/img/cards/01IO015-full.png"/>
                    <img className="region-icon" src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/bltd237873a03f819f8/5e850560cfad92647963527d/Ionia.png"/>
                    <span className="title-info">
                        <p>Ionia</p>
                        <p>YASUO</p>
                        <p>Storm of Steel</p>
                    </span>
                    <p>______________</p>
                    <p>Strike swiftly and stop enemies in their tracks. Unleash a whirlwind to cut them down before they can draw breath.</p>

                </div>
            </div>
        )
    }
}