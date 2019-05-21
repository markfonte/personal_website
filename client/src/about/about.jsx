import React from 'react';
import './about.css';
import { Typography } from '@material-ui/core';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    fetchInfo() {
        fetch(process.env.REACT_APP_API_URL + "about", {credentials: 'same-origin' })
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(error => console.log(error));
    }

    componentDidMount() {
        this.fetchInfo();
    }

    render() {
        return(
            <Typography variant="h6">{this.state.apiResponse}</Typography>
        );
    }
}

export default About;