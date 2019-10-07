import React, { Component } from 'react'

export default class Demande extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            client: props.data
        }
    }

    render() {
        return (
            <div>
                <h1>This.is Demande page</h1>
                
            </div>
        )
    }
}
