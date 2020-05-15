import React, { Component } from 'react'



export default class BeLegendary extends Component{
    state = []

    // slideIndex = 1;
    // showSlides(slideIndex);

    // // Next/previous controls
    // plusSlides(n) {
    // showSlides(slideIndex += n);
    // }

    // // Thumbnail image controls
    // currentSlide(n) {
    //     showSlides(slideIndex = n);
    // }

    // showSlides(n) {
    //     var i;
    //     var slides = document.getElementsByClassName("mySlides");
    //     var dots = document.getElementsByClassName("dot");
    //     if (n > slides.length) {slideIndex = 1}
    //     if (n < 1) {slideIndex = slides.length}
    //     for (i = 0; i < slides.length; i++) {
    //         slides[i].style.display = "none";
    //     }
    //     for (i = 0; i < dots.length; i++) {
    //         dots[i].className = dots[i].className.replace(" active", "");
    //     }
    //     slides[slideIndex-1].style.display = "block";
    //     dots[slideIndex-1].className += " active";
    // }

    render(){
        return (
            <div className="be-legendary">
                <p className="be-legendary-title">BE LEGENDARY</p>
                <p>_______________________</p>
                <p className="be-legendary-content">
                Face off in dynamic, alternating combat full of opportunities to adapt and outplay. Make your move, but be ready to react, because your opponent has a plan of their own. It all comes down to this—can you outwit them and win?
                </p>
                <p>_______________________</p>
                
                {/* <!-- Slideshow container --> */}
                <div className="three-images-container">
                    <div className="intro-card fade">
                        <div className="numbertext">1 / 3</div>
                        <img className="intro-card-image" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/smv-bacon-s001-dem-selfless-shieldguard.jpg"/>
                        <p className="intro-card-title">SKILL ABOVE ALL</p>
                        <p className="intro-card-content">It's all about the choices you make and the risks you take. Every move matters and the outplays are all up to you.</p>

                    </div>

                    <div className="intro-card fade">
                        <div className="numbertext">2 / 3</div>
                        <img className="intro-card-image" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/S01_U_P14_Eager-Apprentice.jpg"/>
                        <p className="intro-card-title">CRAFT YOUR STRATEGY</p>
                        <p className="intro-card-content">Combine, adapt, and experiment with frequent new releases for every region in an always-evolving meta.</p>
                    </div>

                    <div className="intro-card fade">
                        <div className="numbertext">3 / 3</div>
                        <img className="intro-card-image" src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/S01_U_F06_Poro.jpg"/>
                        <p className="intro-card-title">YOUR CARDS, YOUR WAY</p>
                        <p className="intro-card-content">Earn cards for free as you play or buy exactly what you want in the store— you’re in control of your collection.</p>
                    </div>

                    {/* <!-- Next and previous buttons --> */}
                    <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onclick="plusSlides(1)">&#10095;</a>
                </div>
                {/* <!-- The dots/circles --> */}
                {/* style={"text-align:center"} */}
                <div >
                    <span className="dot" onClick="currentSlide(1)"></span>
                    <span className="dot" onClick="currentSlide(2)"></span>
                    <span className="dot" onClick="currentSlide(3)"></span>
                </div>
            </div>
        )
    }
}