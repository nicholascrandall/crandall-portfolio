import { Component } from 'react'

export default class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div id="hamburger-menu">
                <div class="h-container">
                <input type="checkbox" id="nav-menu1"/>
                <label id="nav-icon1" for="nav-menu1">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                </div>
                
                <ul class="hamburger-items">
                    <li><a href="https://www.linkedin.com/in/nicholascrandall1" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    <li><a href="https://drive.google.com/file/d/1eKkkDrtWTDgz-dAn6OSD7cE65nfEgL2S/view" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                </ul>
                <h1>Nicholas Crandall</h1>
            </div>
        )
    }
}