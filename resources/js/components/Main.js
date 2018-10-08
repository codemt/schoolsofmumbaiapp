import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar/navbar';
import LandingPage from './landingpage';
export default class Main extends Component {
    render() {
        return (
            <div className="container">
                    <NavBar />
                    <LandingPage />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
