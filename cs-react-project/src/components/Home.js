import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            client: props.data
        }
    }

    render() {
        return (
            <div>
                <h1>This.is Home page</h1>
                
            </div>
        )
    }
}
