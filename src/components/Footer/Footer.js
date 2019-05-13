import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>Current work availability:</p>
        <Link to="/availability">
          <p>Looking for opportunities. Will be available to start work Monday, July 1 2019.</p>
        </Link>
      </footer>
    );
  }
}

export default( Footer );
