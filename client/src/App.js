import React from 'react';
import reactLogo from './logo.svg';
import profilePicture from './mark_circle.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Resume from './resume/resume.jsx';
import Home from './home/home.jsx';
import Button from '@material-ui/core/Button';
import LinkStyle from '@material-ui/core/Link';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';

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
            <div className="App">
                <Router>
                    <img src={profilePicture} className="profile-logo" alt="profile" />
                    <Typography variant="h3">Mark Fonte</Typography>
                    <nav className="primary-nav">
                        <ul>
                            <li>
                                <LinkStyle component={Link} to="/">
                                        <Button variant="contained" color="primary">
                                            Home
                                        </Button>
                                </LinkStyle>
                            </li>
                            <li>
                                <LinkStyle component={Link} to="/about">
                                    <Button variant="contained" color="primary">
                                        About
                                    </Button>
                                </LinkStyle>
                            </li>
                            <li>
                                <LinkStyle component={Link} to="/resume">
                                    <Button variant="contained" color="primary">
                                        Resume
                                    </Button>
                                </LinkStyle>
                            </li>
                            <li>
                                <LinkStyle component={Link} to="/contact">
                                    <Button variant="contained" color="primary">
                                        Contact
                                    </Button>
                                </LinkStyle>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </Router>
                { this.state.apiResponse ? (
                    <img src={reactLogo} className="App-logo" alt="logo" />
                ) : (
                    <p></p> )
                }
            </div>
          );
    }
}

export default App;
