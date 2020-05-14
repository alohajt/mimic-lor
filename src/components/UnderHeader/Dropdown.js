import React, { Component } from 'react'

// import riot-fist-container-white-black from '.../images/riot-fist-container-white-black.png';


export default class Dropdown extends Component{

    constructor() {
        super();
        this.state = {
          displayMenu: false,
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
      }
    
      showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
          // 在DOM根节点上为组件绑定事件处理函数
          document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        // 在这里解绑组件在DOM根节点上绑定的事件
        this.setState({ displayMenu: false }, () => {
          // 注意事件的绑定解绑不能传递匿名函数
          document.removeEventListener('click', this.hideDropdownMenu);
        });
      }


    render() {
        return (
          <div className="riot-games-dropdown">
            <div className="button" onClick={this.showDropdownMenu}> Riot Games </div>
            {
              this.state.displayMenu ? (
                <ul>
                    <li><a className="game-titles" >☰</a></li>
                    

                    <li className="LOR-PC-mobile">
                    <img onClick={()=>{window.location.href="https://playruneterra.com/en-us/"}} 
                     src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt1f8c5e6767e8f8be/5ea9c864cf88d36e47cef7a1/Launch_Riot_Bar_660x428.jpg?format=pjpg&quality=85" >
                     </img>
                     Legends of Runeterra is LIVE on PC and Mobile RIGHT NOW!
                    </li>
                   
                    <li className="TFT-mobile">
                        <img onClick={()=>{window.location.href="https://teamfighttactics.leagueoflegends.com/en-us/"}}
                        src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltcdb9710acb62a365/5e738e5f84d2f56d32c6a004/tft-mobile-launch-riot-header-660x428.jpg?format=pjpg&quality=85"
                        >   
                        </img>
                        Try TFT for the first time on mobile.
                    </li>
                    <li className="LOL-PC">
                        <img onClick={()=>{window.location.href="https://na.leagueoflegends.com/en-us/?utm_source=riotbar&utm_medium=card1&utm_campaign=lol&utm_content=lol_key01"}}
                        src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt091f43c0c09e2520/5db7721ae9d7526ab429fe8f/LOL---Marquee-Two---x2-Asset.png?format=pjpg&quality=85"
                        >
                        </img>
                        Play Now
                    </li>
                    <li className="TFT-PC">
                        <img onClick={()=>{window.location.href="https://teamfighttactics.leagueoflegends.com/en-us/?utm_source=riotbar&utm_medium=card2&utm_campaign=tft&utm_content=tft_mole01"}}
                        src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt893f1ace027e0a15/5e738e8982f4cf42bbba3ba2/tft-mobile-launch-riot-gamecard-318x428.jpg?format=pjpg&quality=85"  
                        />
                        Play Now
                    </li>
                    <li className="LOR-PC">
                        <img onClick={()=>{window.location.href="https://playruneterra.com/en-us/"}}
                        src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt6852658eb4917bfd/5ea9d0e82b79652f27c31f03/GameCard_Key_Art_Lux_Ez.jpg?format=pjpg&quality=85"
                        />
                        Play Now
                    </li>
                    <li className="Valorant">
                        <img onClick={()=>{window.location.href="https://beta.playvalorant.com/en-us/"}}
                        src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blte94074969e8e82fe/5e618391d5a7d573058228ba/Riot_Nav_Bar_Graphic_318x428.jpg?format=pjpg&quality=85"
                        />
                        Summer 2020
                    </li>
                </ul>
              ) : null
            }
          </div>
    
        );
      }
}