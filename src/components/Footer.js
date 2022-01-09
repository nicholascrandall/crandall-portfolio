import { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='footer'>
                <h2>Contact Information</h2>
                <a href="mailto:nickycrandall@gmail.com">Nickycrandall@gmail.com</a>
                <br />
                <a href="https://www.linkedin.com/in/nicholascrandall1/" target="_blank" rel="noreferrer">linkedin.com/in/nicholascrandall1</a>
            </div> 
        )
    }
}