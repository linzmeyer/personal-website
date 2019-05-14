import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from '../../img/profile-pic.jpeg';
import resume from '../../docs/Resume.pdf';

class Nav extends Component {

  navToHome = () => {
    this.props.history.push( '/' );
  }

  render() {
    return (
      <nav className="main-nav" >
        <div>
            <div className="nav-pic-frame" onClick={ this.navToHome }>
              <img
                src={picture}
                alt="Chase profile" className="nav-pic" >
              </img>
            </div>
          <ul>
            <li>
              <Link to="/about" >
                <FontAwesomeIcon icon="info-circle" /> About
              </Link>
            </li>
            <li>
              {/* need to use <a> because Link includes the local host. Open in new tab (chrome) */}
              <a href="https://github.com/linzmeyer" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={['fab', 'github']} /> Github
              </a>
            </li>
            <li>
              <Link to="/contact" >
                <FontAwesomeIcon icon={["far", "address-book"]} /> Contact
              </Link>
            </li>
            <li>
              <Link to="/availability" >
                <FontAwesomeIcon icon={["far", "calendar-check"]} /> Availability
              </Link>
            </li>
            <li>
              <a href={ resume } target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={["far", "file-alt"]} /> Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default (withRouter( Nav ));

