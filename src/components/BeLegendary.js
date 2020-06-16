import React, { Component } from "react";

export default class BeLegendary extends Component {
  state = [];

  render() {
    return (
      <div className="be-legendary w">
        <h4 className="be-legendary-title">BE LEGENDARY</h4>
        <p>_______________________</p>
        <p className="be-legendary-content">
          Face off in dynamic, alternating combat full of opportunities to adapt
          and outplay. Make your move, but be ready to react, because your
          opponent has a plan of their own. It all comes down to this—can you
          outwit them and win?
        </p>
        <p>_______________________</p>

        {/* <!-- Slideshow container --> */}
        <div className="three-images-container">
          <ul class="clearfix">
            <li>
              <div className="intro-card">
                {/* <div className="numbertext">1 / 3</div> */}
                <img
                  className="intro-card-image"
                  src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/smv-bacon-s001-dem-selfless-shieldguard.jpg"
                />
                <h4 className="intro-card-title">SKILL ABOVE ALL</h4>
                <p className="intro-card-content">
                  It's all about the choices you make and the risks you take.
                  Every move matters and the outplays are all up to you.
                </p>
              </div>
            </li>

            <li>
              <div className="intro-card">
                {/* <div className="numbertext">2 / 3</div> */}
                <img
                  className="intro-card-image"
                  src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/S01_U_P14_Eager-Apprentice.jpg"
                />
                <h4 className="intro-card-title">CRAFT YOUR STRATEGY</h4>
                <p className="intro-card-content">
                  Combine, adapt, and experiment with frequent new releases for
                  every region in an always-evolving meta.
                </p>
              </div>
            </li>
            <li>
              <div className="intro-card">
                {/* <div className="numbertext">3 / 3</div> */}
                <img
                  className="intro-card-image"
                  src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/intro-cards/S01_U_F06_Poro.jpg"
                />
                <h4 className="intro-card-title">YOUR CARDS, YOUR WAY</h4>
                <p className="intro-card-content">
                  Earn cards for free as you play or buy exactly what you want
                  in the store— you’re in control of your collection.
                </p>
              </div>
            </li>
          </ul>

          {/* <!-- Next and previous buttons --> */}
          {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a className="next" onclick="plusSlides(1)">&#10095;</a> */}
        </div>
        {/* <!-- The dots/circles --> */}
        {/* style={"text-align:center"} */}
        {/* <div >
                    <span className="dot" onClick="currentSlide(1)"></span>
                    <span className="dot" onClick="currentSlide(2)"></span>
                    <span className="dot" onClick="currentSlide(3)"></span>
                </div> */}
      </div>
    );
  }
}
