import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from '../../img/profile-pic.jpeg';
import { Link } from 'react-router-dom';

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
              <Link to="/" ><FontAwesomeIcon icon="home" /> Home</Link>
            </li>
            <li>
              <Link to="/" ><FontAwesomeIcon icon="info-circle" /> About</Link>
            </li>
            <li>
              <Link to="/" ><FontAwesomeIcon icon="people-carry" /> Github</Link>
            </li>
            <li>
              <Link to="/" ><FontAwesomeIcon icon={["far", "address-book"]} /> Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default (withRouter( Nav ));

