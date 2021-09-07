import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Jumbotron from './Jumbotron';

class Header extends React.Component {
    listener = null;
    state = {
        nav:false
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    handleScroll= () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            if (!this.state.nav) {
                this.setState({ nav: true });
            }
        }
        else {
            if (this.state.nav) {
                this.setState({ nav: false });
            }
        }

    }

  render() {
    return (
        <HashRouter>
            <header>
                <nav className={`navbar ${this.state.nav && "nav_white"}`}>
                    <h2>The People</h2>
                    <ul id="drawer" className="nav_list">
                        <li className="nav_item"><NavLink exact to="/">Home</NavLink></li>
                        <li className="nav_item"><NavLink to="/australia">Australia</NavLink></li>
                        <li className="nav_item"><NavLink to="/turkey">Turkey</NavLink></li>
                        <li className="nav_item"><NavLink to="/about">About</NavLink></li>
                    </ul>
                    <a href="#" id="menu" className="icon" aria-label="click menu">
                        <i class="fa fa-bars"></i>
                    </a>
                </nav>
                <Jumbotron />
            </header>
        </HashRouter>
    );
  }
}

export default Header;