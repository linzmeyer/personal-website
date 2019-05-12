import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import picture from '../../img/profile-pic.jpeg';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <footer>
        <p>Current work availability: Looking for opportunities. Will be available to start work Monday, July 1 2019.</p>
      </footer>
    );
  }
}

export default (withRouter( Footer ));
