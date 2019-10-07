import React, {Component} from 'react';
import './App.css';
import SignIn from './components/SignIn'
import Profile from './components/Profile';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        client: {},
        navbar: 'Profile'
    }
  }


  setClient = (clientData) => {
    this.setState({
        client: clientData
    })
  }

  
  isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}  

  render(){
    return (
      <div className="App"> 
        <BrowserRouter >
          <Route exact path={"/"} render={(props) => <SignIn {...props} setClient={this.setClient} />}/>
          <Route path={"/sign-in"} render={(props) => <SignIn {...props} setClient={this.setClient} />}/>
          <Route path={"/profile"} render={(props) => <Profile {...props} client={this.state.client} />}/>
          {this.isEmpty(this.state.client) ? 
            <Redirect to="sign-in"></Redirect>  :
            <Redirect to="profile"></Redirect>
          }
        </BrowserRouter>
        {/*
          this.state.navbar==='SignIn' ?
          <SignIn/> : (
            this.state.navbar==='Profile' ?
            <Profile/> :
            <Profileee/>
            )*/
        }
      </div>
    )
  }

}

export default App;
