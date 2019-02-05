import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newPassword } from '../actions/index';


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {value: '',
                      route: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.value);
        this.setState({route: '/homePage'});
        this.props.dispatch(newPassword(this.state.value));


    }
    handleChange(e){
        this.setState({value: e.target.value});
    }
    render(){
        return <div>
                    <Link to = "/">
                        <p>Back</p>
                    </Link>
                    <br/>
                    <input value = {this.state.value} onChange={this.handleChange}/>
                    <div onClick={this.handleSubmit}>
                        <Link to = "/homePage">
                            <button> Save </button>
                        </Link>
                        <span>  or  </span>
                        <Link to = "/homePageReselect">
                            <button>Save(Reselect)</button>
                        </Link>
                    </div>
                    <br/>
                    <p>{this.props.password}</p>
               </div>

}
};


export default connect()(Login);

