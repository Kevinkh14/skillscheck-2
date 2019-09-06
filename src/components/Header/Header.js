import React, {Component} from 'react'
import "./header.css"
export default class Header extends Component{

    render(){
        return(
            <div className = 'header'>
                <img src = 'https://raw.githubusercontent.com/Kevinkh14/simulation-1/master/assets/shelfie_icon.png'/>
                <h1>Shelfie</h1>
            </div>
        )
    }
}