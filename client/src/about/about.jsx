import React from 'react';
import './about.css';

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
            <p class="main_text">{this.state.apiResponse}</p>
        );
    }
}

export default About;