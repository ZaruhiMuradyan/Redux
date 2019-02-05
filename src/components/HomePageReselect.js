import {connect} from "react-redux";
import {createSelector} from "reselect/lib/index";
import React, {Component} from "react";
import { Link } from 'react-router-dom';


class HomePageReselect extends Component{
    render(){
        return (
            <div>
                <Link to = "/login">
                    <p>Back</p>
                </Link>
                <br/>
                <p>{this.props.pass}</p>
            </div>)
    }
};





const mapStateToProps = (stote, _ownProps) => {
    return createSelector(
        [
            state => state.password
        ],
        pass => ({pass})
    )
}

// const getPassword = state => state.password;
// const getUser = state => state.user;
//
// const makeGetPassState = () => createSelector([getPassword, getUser], (pass) => ({pass}));
//
// const mapStateToProps = () => {
//     const getPassState = makeGetPassState();
//     return (state, props) => getPassState(state, props)
// }



export default connect(mapStateToProps)(HomePageReselect);
