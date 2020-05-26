import React, { Component } from 'react'

export default class RegisterToPlay extends Component {
    state= []

    render(){
        return(
            <div className="register-to-play">
                <h2>REGISTER TO PLAY</h2>
                <div className="account-status">
                    <div className="no-account">
                        <p>I don’t have a Riot account yet</p>
                        <button>CREATE ONE</button>
                    </div>
                    <div className="yes-account">
                        <p>I have a Riot account yet</p>
                        <button>SIGN IN</button>
                    </div>
                </div>
            </div>
        )
    }
}