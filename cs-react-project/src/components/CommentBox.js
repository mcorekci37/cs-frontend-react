import React, { Component } from 'react'

export default class CommentBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            client: props.data
        }
    }
    render() {
        return (
            <div>
                <h1>This.is CommentBox page</h1>
                
            </div>
        )
    }
}
