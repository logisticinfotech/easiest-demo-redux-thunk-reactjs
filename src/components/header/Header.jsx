import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark">
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="nav-link" exact={true} to="/moviedb" activeClassName="active">MovieDB</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" exact={true} to="/tabs" activeClassName="active">Tabs</NavLink>
                    </li>
                </ul>
                <NavLink className="nav-link" exact={true} to="/moviedb">
                    <img src="images/logo.svg" alt="" height="20" />
                    <span className="logo-title">React</span>
                </NavLink>
            </nav>
        );
    }
}


export default Header;