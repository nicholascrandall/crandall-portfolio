import { Component } from 'react'

import {Segment, Container} from 'semantic-ui-react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Segment inverted vertical style={{padding: '2em 0em' }} className="footer">
            <Container>
            <h2>Contact Information</h2>
            <a href="mailto:nickycrandall@gmail.com">Nickycrandall@gmail.com</a>
            <br />
            <a href="https://www.linkedin.com/in/nicholascrandall1/" target="_blank" rel="noreferrer">linkedin.com/in/nicholascrandall1</a>
            </Container>
            </Segment>
        )
    }
}