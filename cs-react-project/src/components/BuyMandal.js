import React, { Component } from 'react'

export default class BuyMandal extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            client: props.data
        }
    }
    render() {
        return (
            <div>
                <h1>This.is BuyMandal page</h1>                
            </div>
        )
    }
}
