import React, { Component } from 'react'

export default class BeLegendary extends Component{
    state = []

    render(){
        return (
            <div className="be-legendary">
                <p>BE LEGENDARY</p>
                <p>
                Face off in dynamic, alternating combat full of opportunities to adapt and outplay. Make your move, but be ready to react, because your opponent has a plan of their own. It all comes down to this—can you outwit them and win?
                </p>
                
                <div className="three-images-container">
                    <div className="skill-above-all">
                        <image src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/smv-bacon-s001-dem-selfless-shieldguard.jpg"></image>
                        <p>SKILL ABOVE ALL</p>
                        <p>It's all about the choices you make and the risks you take. Every move matters and the outplays are all up to you.</p>

                    </div>

                    <div className="craft-your-strategy">
                        <image src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/S01_U_P14_Eager-Apprentice.jpg"/>
                        <p>CRAFT YOUR STRATEGY</p>
                        <p>Combine, adapt, and experiment with frequent new releases for every region in an always-evolving meta.</p>
                    </div>

                    <div className="your-cards-your-way">
                        <image src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/S01_U_F06_Poro.jpg"/>
                        <p>YOUR CARDS, YOUR WAY</p>
                        <p>Earn cards for free as you play or buy exactly what you want in the store— you’re in control of your collection.</p>
                    </div>
                </div>
            </div>
        )
    }
}