import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';

class Contact extends Component {

  render() {
    return (
      <div className="wrapper" >
        <Nav />
        <div>
          <div className="content-container">
            <div className="info" >
              <h1>Contact</h1>
              <h3>Phone: 651-808-7197</h3>
              <h3>email: chaselinmzyer@gmail.com</h3>
              <a href="https://www.linkedin.com/in/chase-linzmeyer-a0a204173/" target="_blank" rel="noopener noreferrer" ><h3>LinkdIn</h3></a>
              <a href="https://www.facebook.com/chase.linzmeyer" target="_blank" rel="noopener noreferrer" ><h3>Facebook</h3></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ( Contact );