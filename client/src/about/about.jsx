import React from 'react';
import './about.css';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {apiResponse: ""};
    }

    getInfo() {
        fetch("http://localhost:9000/about", {credentials: 'same-origin' })
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}))
        .catch(error => console.log(error));
    }

    componentDidMount() {
        this.getInfo();
    }

    render() {
        return(
            <p class="main_text">{this.state.apiResponse}</p>
        );
    }
}

export default About;