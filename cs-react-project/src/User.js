import React, { Component } from 'react'

class User extends Component {

    componentDidUpdate( prevProps,  prevState){
        sessionStorage.setItem("isLoggedIn", !prevState.isLoggedIn)
    }

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            isLoggedIn: false
        }
    }
    componentDidMount() {
        this.setState({
            isLoggedIn: sessionStorage.getItem("isLoggedIn"),
            isLoading: false,
        })
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render() {        
        return (
            <div>
                {this.state.isLoading? 
                    <h1>You are logged {this.state.isLoggedIn ? "in" : "out"}</h1>:null
}
                <button onClick={this.handleClick}>Log {!this.state.isLoggedIn ? "in" : "out"}</button>
            </div>
        )
    }
}

export default User