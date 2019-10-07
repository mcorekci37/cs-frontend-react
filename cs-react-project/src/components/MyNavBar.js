import React, { Component } from 'react'

export default class MyNavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    signOut = () => {
        
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                    <button className="btn btn-primary" id="menu-toggle">İlan Ver</button>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#iletisim">İletişim <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.signOut} href="/sign-in">Çıkış Yap</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
