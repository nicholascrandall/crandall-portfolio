import './App.css';
import NavBar from './components/NavBar'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          
          {/* projects */}
          <Route path="/projects">
            <NavBar />
            <Projects />
            <Footer />
          </Route>

          {/* home page */}
          <Route path="/">
            <NavBar />
            <About />
            <Footer />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}


export default App;
