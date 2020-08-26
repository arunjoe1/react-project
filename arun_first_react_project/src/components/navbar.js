import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class NavBar extends Component {

    render() {
        return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <Link to="/">
                            STIGMATA
                    </Link>
                    </li>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                    <li>

                        <Link to="/AddData">Add Data</Link>
                    </li>
                    <li>

                        <Link to="/ListData">List Data</Link>
                    </li>
                    
                </ul>
            </div>
        );
    }


}

export default NavBar;