import { Component } from 'react'
import { Link } from 'react-router-dom'
import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'

export default class Hamburger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
    }

    burgerFlip = () => {
        this.setState(prevState => ({
            check: !prevState.check
          }));
    }

    render() {
        return (
            <div id="hamburger-menu">
                <div className="h-container">
                <input type="checkbox" id="nav-menu1"/>
                <label id="nav-icon1" for="nav-menu1">
                    <div onClick={this.burgerFlip}>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </label>
                </div>
                
                {this.state.check &&
                    <div className="itemContainer">
                        <ul className="hamburger-items">
                            <li><a href="https://www.linkedin.com/in/nicholascrandall1" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="Linked-In" className="hamLogo" /></a></li>

                            <li><a href="https://github.com/nicholascrandall" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" className="hamLogo" /></a></li>

                            <li><a href="https://drive.google.com/file/d/1eKkkDrtWTDgz-dAn6OSD7cE65nfEgL2S/view" target="_blank" rel="noreferrer">Resume</a></li>
                        </ul>
                    </div>
                }
                
                {!this.state.check && 
                    <div className='nc'>
                        <Link to='/'>
                            <h1>Home</h1>
                        </Link>
                        <Link to='/projects'>
                            <h1>Projects</h1>
                        </Link>
                    </div>
                }

            </div>
        )
    }
}