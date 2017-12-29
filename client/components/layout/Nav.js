import React from "react";
import { IndexLink, Link } from "react-router";
import {Button , Navbar ,NavItem ,NavDropdown ,MenuItem} from 'react-bootstrap';
import './Nav.css'

export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
          collapsed: true,
        };
      }
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
      }
  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    
    return (     
       
        <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar" onClick={this.toggleCollapse.bind(this)}> 
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div class={"navbar-collapse " + navClass} id="navbar">
            <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li class="dropdown">
                <div href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></div>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li class="dropdown-header">Nav header</li>
                    <li><a href="#">Separated link</a></li>
                    <li><a href="#">One more separated link</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
);

  }
}
