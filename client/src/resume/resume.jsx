import React from 'react';
import './resume.css';
import { Typography } from '@material-ui/core';
import resumePdf from '../resume.pdf';

class Resume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    fetchInfo() {
        fetch(process.env.REACT_APP_API_URL + "resume", {credentials: 'same-origin' })
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(error => console.log(error));
    }

    componentDidMount() {
        this.fetchInfo();
    }

    render() {
        return(
            <div>
                <embed id="resume-pdf" type="application/pdf" src={resumePdf} />
                <Typography id="resume-title" variant="subtitle1" align="right">Last updated: Feb 02 2019</Typography>
            </div>
        );
    }
}

export default Resume;