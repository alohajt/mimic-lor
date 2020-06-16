import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer w">
        <div className="abouts">
          <ul className="clearfix">
            <li>
              <a href="#">ABOUT LENGENDS OF RUNETERRA</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
            <li>
              <a href="#">FOR DEVELOPERS</a>
            </li>
            <li>
              <a href="#">MEDIA</a>
            </li>
          </ul>
            </div>
            <p>© 2020 Riot Games, Inc</p>
            <ul className="clearfix">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms Of Use</a></li>
            </ul>
            <div className="teen clearfix">
                <img src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt67f8b7843bd8166a/5e71600f353d6343a753219d/na-esrb.png?&height=100&disable=upscale"></img>
                <p>
                    Alcohol Reference<br/>
                    Blood<br />
                    Fantasy Violence<br />
                    Mild Suggestive Themes<br />
                    Users Interact<br />
                    In-Game Purchases
                </p>
            </div>
      </div>
    );
  }
}
