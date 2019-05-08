import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Resume from './resume/resume.jsx';
import Home from './home/home.jsx';

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    callAPI() {
        fetch(process.env.REACT_APP_API_URL + "testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res}))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <Router>
                <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Edit <code>src/App.js</code> and ssadsave to reload.
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                    <p>{this.state.apiResponse}</p>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>

                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/resume" component={Resume} />

                </div>
            </Router>
          );
    }
}

export default App;
