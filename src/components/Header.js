import React from 'react';

class Header extends React.Component {
  render() {
    return (
        <nav id="navbar">
            <h2>The Talents</h2>
            <ul id="drawer" className="nav_list">
                <li className="nav_item"><a href="#articleLink1" title="home">Home</a></li>
                <li className="nav_item"><a href="#articleLink2" title="australia">Australia</a></li>
                <li className="nav_item"><a href="#articleLink3" title="turkey">Turkey</a></li>
                <li className="nav_item"><a href="#articleLink4" title="about">About</a></li>
            </ul>
            <a href="#" id="menu" className="icon" aria-label="click menu">
                <i class="fa fa-bars"></i>
            </a>
        </nav>
    );
  }
}

export default Header;