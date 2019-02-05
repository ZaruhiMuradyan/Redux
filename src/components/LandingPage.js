import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component{
    render() {
        return (<div>
                    <p>Welcome to Zakaria Dzageci's team</p>
                    <Link to = "/login">
                        <button> Please login</button>
                    </Link>
                </div>)
                }
};

export default  LandingPage;