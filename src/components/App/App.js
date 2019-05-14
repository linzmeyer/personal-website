import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import Footer from '../Footer/Footer';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import About from '../../Views/About/About';
import Home from '../../Views/Home/Home';
import Contact from '../../Views/Contact/Contact';
import './App.css';
import Availability from '../../Views/Availability/Availability';

class App extends Component {

  // componentDidMount () {
  //   this.props.dispatch({type: 'FETCH_USER'})
  // }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            <Route
              exact
              path="/about"
              component={ About }
            />
            <Route
              exact
              path="/home"
              component={ Home }
            />
            <Route
              exact
              path="/contact"
              component={ Contact }
            />
            <Route
              exact
              path="/availability"
              component={ Availability }
            />
            
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={ () => <h1>404</h1> } />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()( App );
