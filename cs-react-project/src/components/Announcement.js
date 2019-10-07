import React, { Component } from 'react'

export default class Announcement extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            client: props.data
        }
    }
    
    render() {
        return (
            <div>
                <h1>This.is Announcement page</h1>
            </div>
        )
    }
}
