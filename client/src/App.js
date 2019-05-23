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
        fetch(process.env.REACT_APP_API_URL + "api_heartbeat")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res}))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        const routes = [
            {name: "Home", path: "/"},
            {name: "About", path: "/about"},
            {name: "Resume", path: "/resume"},
            {name: "Contact", path: "/contact"}
        ];
        return (
            <div className="App">
                <Router>
                    <img src={profilePicture} className="profile-logo" alt="profile" />
                    <Typography variant="h3">Mark Fonte</Typography>
                    <nav className="primary-nav">
                        <ul>
                            {routes.map( (route, i) => (
                                <li key={i} >
                                    <LinkStyle component={Link} to={route.path}>
                                        <Button variant="contained" color="primary">
                                            {route.name}
                                        </Button>
                                    </LinkStyle>
                                </li>
                            ))}
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
