import React, { Component } from 'react'

export default class Machine extends Component {
    constructor(props) {
        super(props)

        this.state = {
            client: props.data,
            clicked: ""
        }
    }
    handleClick = (m) => {
        this.setState({
            clicked: m.description
        }
        )
    }
    handleDelete = (m) => {
        const e=new Event(this);
        e.preventDefault();

        fetch('http://localhost:8081/machines/'+m.id, {
            method: 'DELETE',
        })
        .then(function (response) {
            console.log(response)
            return response.json()
        })
          .then(function (myJson) {
            console.log(JSON.stringify(myJson))
        });
    }
    

    showDetailMachine = (m) => {
        return 'Marka: ' + m.mark + ', Model: ' + m.model + ', Kapasite: ' + m.capacity
    }
    showDetailProperty = (p) => {
        return 'Voltaj: ' + p.voltage + ', Dakika: ' + p.minute
    }

    render() {


        const triangles = {
            padding: 0,
            border: "none",
            background: "none",
            outline: "none",
            color: "green"
        }

        
        

        let myMachines = []
        for (const m of this.state.client.machineList) {
            let properties = []
            for (const p of m.propertyList) {
                if (this.state.clicked === m.description) {
                    properties.push(
                        <li title={this.showDetailProperty(p)} style={{ listStyle: "none" }} key={p.id}>
                            {p.type}
                        </li>
                    )
                }
            }
            myMachines.push(
                <li title={this.showDetailMachine(m)} style={{ listStyle: "none" }} key={m.id}>
                    <button style={triangles} onClick={() => { this.setState({ clicked: m.description }) }} href="#">▼</button>
                    {m.description + " "}
                    <button style={{color:"red",background:"none",border:"none"}} onClick={this.handleDelete(m)} href="#">X</button>
                    <ul>
                        {properties}
                    </ul>
                </li>
            )
        }

        return (
            <div>
                <h1>This.is Machine page</h1>
                <ul>
                    {myMachines}
                </ul>
            </div>
        )
    }
}
