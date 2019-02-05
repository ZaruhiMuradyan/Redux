import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {pass: this.props.password}
    }
    render(){
        return (
            <div>
                <Link to = "/login">
                    <p>Back</p>
                </Link>
                <br/>
                <p>{this.state.pass}</p>
            </div>)
    }
};


const mapStateToProps = state => ({
    password: state.password
});

export default connect(mapStateToProps)(HomePage);




