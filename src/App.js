import React, {Component} from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import HomePage from './components/HomePage';
import HomePageReselect from './components/HomePageReselect';
import { Switch, Route } from 'react-router-dom';

class App extends Component{
    render(){
        return (<div>
            <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route path='/login' component={Login}/>
                <Route path='/homePage' component={HomePage}/>
                <Route path='/homePageReselect' component={HomePageReselect}/>
            </Switch>
        </div>)
    }
}

export default App;