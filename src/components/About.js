import { Component } from 'react'
import GA from '../images/GA.jpg'
import BU from '../images/binghamton.png'

export default class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='wrapper'>
                <h1>About Me</h1>
                <h2>Full Stack Software Engineer</h2>
                <p>I am a full stack software engineer with a background in psychology, who is passionate about tech. My strengths in understanding how others think, combined with my out-of-the-box style of problem-solving, allow me to create software which brings enjoyment to the user. When working within a team to accomplish a common goal, my strongest assets are my patience and empathy.
                </p>

                <h2>Education</h2>
                <img className="edu" src={GA} alt="General Assembly" />
                <div className="centered">
                    <ul>
                        <li className="title">General Assembly</li>
                        <li>Software Engineering</li>
                        <li className="year">2020-2021</li>
                    </ul>
                </div>
                
                <img className="edu" src={BU} alt="Binghamton University" />
                <div className="centered">
                    <ul>
                        <li className="title">Binghamton University</li>
                        <li>B.A. Psychology</li>
                        <li className="year">2016-2020</li>
                    </ul>
                </div>

                <h2>Skills</h2>
                <div>
                    <ul className="skills">
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>LUA</li>
                        <li>JSON</li>
                        <li>SQL</li>
                        <li>React</li>
                        <li>Flask</li>
                        <li>JQuery</li>
                        <li>Node.js</li>
                        <li>Express</li>
                    </ul>
                </div>
            </div>
        )
    }
}