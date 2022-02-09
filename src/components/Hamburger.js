import { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'
import { Link } from 'react-router-dom'

export default class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <button id="hamburger-menu">
            <nav id="sidebar-menu">
              <h3>Menu</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </button>
        )
    }
}