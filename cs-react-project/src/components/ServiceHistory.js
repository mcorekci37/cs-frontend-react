import React, { Component } from 'react'

export default class ServiceHistory extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            client: props.data
        }
    }

    render() {
        return (
            <div>
                <h1>This.is ServiceHistory page</h1>
                
            </div>
        )
    }
}
