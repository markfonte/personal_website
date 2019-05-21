import React from 'react';
import reactLogo from './logo.svg';
import expressLogo from './express_logo.png';
import nodeLogo from './nodejs_logo.png';
import profilePicture from './mark_circle.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './about/about.jsx';
import Contact from './contact/contact.jsx';
import Resume from './resume/resume.jsx';
import Home from './home/home.jsx';
import Button from '@material-ui/core/Button';
import LinkStyle from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
                                <Link to="/resume">
                                    <LinkStyle>
                                        <Button variant="contained" color="primary">
                                            Resume
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
                        </ul>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </Router>

                <Typography variant="h5" >Built With:</Typography>
                <Paper className="built-with-table">
                    <Table>
                        <TableBody>
                            <TableRow key={1}>
                                <TableCell component="th" scope="row" align="center">React</TableCell>
                                <TableCell align="center">
                                    <img src={reactLogo} className="profile-logo" alt="react" />
                                </TableCell>
                            </TableRow>
                            <TableRow key={2}>
                                <TableCell component="th" scope="row" align="center">Express</TableCell>
                                <TableCell align="center">
                                    <img src={expressLogo} className="logo-default" alt="expressjs" />
                                </TableCell>
                            </TableRow>
                            <TableRow key={3}>
                                <TableCell component="th" scope="row" align="center">NodeJS</TableCell>
                                <TableCell align="center">
                                    <img src={nodeLogo} className="logo-default" alt="nodejs" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
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
