import { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import GitHub from '../images/github.png'
import LinkedIn from '../images/linkedin.png'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div id="main-menu">
            <Menu 
                fixed='top'
                inverted={true}
                className='nav-menu'
            >
                <Menu.Item name='linked-in' className='item'>
                    <a href="https://www.linkedin.com/in/nicholascrandall1" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="Linked-In" className="logo" /></a>
                </Menu.Item>

                <Menu.Item name='Resume' className='item'>
                    <a href="https://drive.google.com/file/d/1eKkkDrtWTDgz-dAn6OSD7cE65nfEgL2S/view" target="_blank" rel="noreferrer">Resume</a> 
                </Menu.Item>

                <Link to='/'>
                    <Menu.Item name='name' className='item name'>
                        Nicholas Crandall
                    </Menu.Item>
                </Link>

                <Link to='/projects'>
                    <Menu.Item name='Projects' className='item'>
                        Projects
                    </Menu.Item>
                </Link>

                <Menu.Item name='github' className='item'>
                    <a href="https://github.com/nicholascrandall" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub" className="logo" /></a>
                </Menu.Item>

            </Menu>
            </div>
        )
    }
}