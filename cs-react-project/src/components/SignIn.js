import React, { Component } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap';
// import {Redirect} from 'react-router'

var bgStyle={
    opacity:0.9,
    backgroundColor:'ccc',
    position:'fixed',
    width:"100%",
    top:0,
    left:0,
    zIndex:-1,
    /* Full height */
    height: "100%",
    backgroundImage: `url(${"http://www.ailehayati.com/wp-content/uploads/2016/12/sadnews.jpg"})`
}

export default class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            mail: '',
            password: '',
            client: {}
            
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let self= this
        fetch('http://localhost:8081/clients/' + this.state.mail + '/' + this.state.password, {
            method: 'POST',
            body: this.state,
        })
        .then(function (response) {
            console.log('abc')
            console.log(response)
            console.log('abc')
            return response.json()
        })
          .then(function (myJson) {
            console.log(JSON.stringify(myJson))
            self.props.setClient(myJson)
        });
    }
    render() {
        let formInfos= [
            {type: 'email', description: 'E-mail ', name: 'mail'},
            {type: 'password', description: 'Şifre ', name: 'password'}
          ]
        let myForm = []
        for (const formInfo of formInfos) {
            myForm.push(
                <FormGroup key={formInfo.name}>
                    <Input type={formInfo.type} name={formInfo.name} 
                            id={formInfo.name} placeholder={formInfo.description}
                            onChange={this.handleChange} autoComplete={formInfo.type}
                    />
                </FormGroup>
            )
          }
        return (
            <div style={bgStyle}>
>
                <Form onSubmit={this.handleSubmit}>
                    {myForm}
                    <Button type="Submit" color="success" onClick={this.handleSubmit}>Giriş Yap</Button>
                </Form>
            </div>
        )
    }
}
