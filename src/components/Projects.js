import { Component } from 'react'
import Checkers from '../images/checkers.png'
import Trailblazers from '../images/trailblazers.png'
import Insight from '../images/insight.png'
import LastGen from '../images/lastgen.png'

export default class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Projects</h1>
                <span>
                    <article>
                        <h2>Checkers</h2>
                        <a href="https://github.com/nicholascrandall/checkers" target="_blank" rel="noreferrer"><img src={Checkers} alt="checkers" className="projectPic" /></a>
                        <p>Built with HTML5, CSS3, and JavaScript. A GitHub Pages hosted two player (local) game of Checkers.</p>
                    </article>
                    <article>
                        <h2>Trailblazers</h2>
                        <a href="https://github.com/nicholascrandall/Trailblazer" target="_blank" rel="noreferrer"><img src={Trailblazers} alt="Trailblazers" className="projectPic" /></a>
                        <p>Front end built with React, back end built with express, node.js, and MongoDB.  Trailblazer is a Full Stack Web Application that allows users to create and sign up for in person outdoor events such as hiking, kayaking, and mountain biking at their favorite locations.</p>
                    </article>
                    <article>
                        <h2>Insight</h2>
                        <a href="https://github.com/nicholascrandall/Insight" target="_blank" rel="noreferrer"><img src={Insight} alt="Insight" className="projectPic" /></a>
                        <p>Front end built with React, back end built with Flask and Postgresql.  Insight is a market research app designed to help day traders and long term investors study the market and plan out their next moves.</p>
                    </article>
                    <article>
                        <h2>Last Gen Games</h2>
                        <a href="https://github.com/nicholascrandall/LastGenGames" target="_blank" rel="noreferrer"><img src={LastGen} alt="Last Gen Games" className="projectPic" /></a>
                        <p className="end">Built with JavaScript, EJS, and CSS3. Backend built with express, node.js, and MongoDB.  Last Gen Games is a Full Stack mock online store with full CRUD where users can buy and sell retro video games.</p>
                    </article>
                </span>
            </div>
        )
    }

}