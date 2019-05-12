import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from '../../img/profile-pic.jpeg';

class Nav extends Component {

  render() {
    return (
      <nav className="main-nav">
        <img src={picture} alt="profile picture" className="nav-pic" ></img>
        <ul>
          <li><a href="#"><FontAwesomeIcon icon="home" /> Home</a></li>
          <li><a href="#"><FontAwesomeIcon icon="info-circle" /> About</a></li>
          <li><a href="#"><FontAwesomeIcon icon="people-carry" /> Services</a></li>
          <li><a href="#"><FontAwesomeIcon icon={["far", "address-book"]} /> Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default (Nav);

