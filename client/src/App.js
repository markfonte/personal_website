import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Resume from './resume/resume.jsx';
import Home from './home/home.jsx';
import Button from '@material-ui/core/Button';
import LinkStyle from '@material-ui/core/Link';

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
                    { this.state.apiResponse ? (
                        <img src={logo} className="App-logo" alt="logo" />
                    ) : (
                        <p></p> )
                    }
                    <h1>Mark Fonte</h1>
                    <nav class="primary-nav">
                        <ul>
                            <li>
                                <Link to="/">
                                    <LinkStyle>
                                        <Button variant="contained" color="primary">
                                            Home
                                        </Button>
                                    </LinkStyle>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <LinkStyle>
                                        <Button variant="contained" color="primary">
                                            About
                                        </Button>
                                    </LinkStyle>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <LinkStyle>
                                        <Button variant="contained" color="primary">
                                            Contact
                                        </Button>
                                    </LinkStyle>
                                </Link>
                            </li>
                            <li>
                                <Link to="/resume">
                                    <LinkStyle>
                                        <Button variant="contained" color="primary">
                                            Resume
                                        </Button>
                                    </LinkStyle>
                                </Link>
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
