import React, { Component } from "react";

import Dropdown from "./UnderHeader/Dropdown";
import News from "./UnderHeader/News";
import Support from "./UnderHeader/Support";
import PlayNow from "./PlayNow";

// import lor-logo from '../images/lor-logo.png'

export default class TopNav extends Component {
  state = [];

  render() {
    return (
      <div className="top-nav w">
        <div className="header">
          <ul>
            <li>
              <img
                src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt8ba1ec1b0013e362/5ea53af4ae23d30cd1dfb3e4/lor-logo.png?&height=50&disable=upscale"
                alt="lor-logo"
              ></img>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
          </ul>
        </div>
        <button>PLAY NOW</button>
      </div>
    );
  }
}
