import React, { Component } from 'react'
import MyNavBar from './MyNavBar'
import Home from './Home'
import Machine from './Machine'
import Announcement from './Announcement'
import ServiceHistory from './ServiceHistory'
import Demande from './Demande'
import CommentBox from './CommentBox'
import BuyMandal from './BuyMandal'



export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      client: props.client,
      sideBar: "home"
    }
  }
  handleClick = (event) => {
    this.setState({
      sideBar: event.target.name
    })
  }

 
  render() {
    let pageContent = <Home />;
    switch (this.state.sideBar) {
      case "home":
        pageContent = <Home data={this.state.client}/>; break;
      case "announcement":
        pageContent = <Announcement data={this.state.client}/>; break;
      case "machine":
        pageContent = <Machine data={this.state.client}/>; break;
      case "demande":
        pageContent = <Demande data={this.state.client}/>; break;
      case "buyMandal":
        pageContent = <BuyMandal data={this.state.client}/>; break;
      case "serviceHistory":
        pageContent = <ServiceHistory data={this.state.client}/>; break;
      case "commentBox":
        pageContent = <CommentBox data={this.state.client}/>; break;

      default:
        pageContent = <Home />;
    }



    return (
        <div className="d-flex" id="wrapper">

          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading"><h1 style={{color: "red"}}><b> {this.state.client.name + " " + this.state.client.surname}</b></h1></div>
            <div className="list-group list-group-flush">
              <a name="home" href="#home" onClick={this.handleClick} className="list-group-item list-group-item-action bg-light">Ana Sayfa</a>
              <a name="announcement" href="#ilanlarim" onClick={this.handleClick} className="list-group-item list-group-item-action bg-light">İlanlarım</a>
              <a name="machine" href="#makinelerim" onClick={this.handleClick} className="list-group-item list-group-item-action bg-light">Makinelerim</a>
              <a name="demande" href="#isteklerim" onClick={this.handleClick} className="list-group-item list-group-item-action bg-light">İsteklerim</a>
              <a name="buyMandal" href="#mandal-al" onClick={this.handleClick} className="list-group-item list-group-item-action bg-light">Mandal Al</a>
              <a name="serviceHistory" href="#hizmet-gecmisim" onClick={this.handleClick} className="list-group-item list-group-item-action bg-light">Hizmet Geçmişim</a>
              <a name="commentBox" href="#yorum-kutusu" onClick={this.handleClick} className="list-group-item list-group-item-action bg-light">Yorum Kutusu</a>
            </div>
          </div>
          <div id="page-content-wrapper">
            <MyNavBar/>
            {pageContent}
          </div>

        </div>
    )
  }
}
