import React, { Component } from "react";
import PlayNow from "../components/PlayNow";
import AvailableOn from "../components/UnderShowPage/AvailableOn";

export default class ShowPage extends Component {
  state = [];

  render() {
    return (
      <div className="show-page w">
        <div className="image-container">
          <img
            className="riot-logo"
            src="https://playruneterra.com/assets/c6a2ea38860dfb617e73efcd15b923adc47c5aa7/static/image/logo.png"
          />

          <img
            className="lee-sin"
            src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/hero/lee-sin.png"
          />
          <img
            className="miss-fortune"
            src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/hero/miss-fortune.png"
          />
        </div>
        <button>PLAY NOW</button>
        <div className="available-on">
          <p className="available-on-text">Availble On</p>
          <div className="available-on-icons">
            <ul class="clearfix">
              <li>
                <img
                  className="on-PC"
                  src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/pc-version.svg"
                />
              </li>
              <li>
                <img
                  className="on-app-store"
                  src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/app-store.svg"
                />
              </li>
              <li>
                <img
                  className="on-google-play"
                  src="https://playruneterra.com/assets/45ccd50389e0d91555d3d2a6d2d83a2d3ca8e297/static/image/badges/google-play_get.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
