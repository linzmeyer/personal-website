import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';

class TacitBoxes extends Component {

  setTestimonial = ( tacitAction, tacitPayload ) => {
    let action = { type: tacitAction, payload: tacitPayload };
    this.props.dispatch( action );
  }

  render() {
    return (
      <section className="boxes">
        <div
          className="box"
          onClick={ () => this.setTestimonial( 'SET_TO_TEAMWORK', 'teamwork' ) }
        >
          <FontAwesomeIcon icon="people-carry" size='4x' />
          <h3>Teamwork</h3>
          <p>... If you want to go far, go together.</p>
        </div>

        <div 
          className="box"
          onClick={ () => this.setTestimonial( 'SET_TO_ADAPTABILITY', 'adaptability' ) }
        >
          <FontAwesomeIcon icon="sliders-h" size='4x' />
          <h3>Adaptability</h3>
          <p>“Intelligence is the ability to adapt to change.”</p>
          <p>– Stephen Hawking</p>
        </div>

        <div
          className="box"
          onClick={ () => this.setTestimonial( 'SET_TO_COMMUNICATION', 'communication' ) }
        >
          <FontAwesomeIcon icon="users" size='4x' />
          <h3>Communication</h3>
          <p>Without communication, there is no team or product.</p>
        </div>

        <div
          className="box"
          onClick={ () => this.setTestimonial( 'SET_TO_INTRINSIC_MOTIVATION', 'intrinsic-motivation' ) }
        >
          <FontAwesomeIcon icon="seedling" size='4x' />
          <h3>Intrinsic Motivation</h3>
          Why?
          <li>to help.</li>
          <li>to learn.</li>
          <li>to grow.</li>
        </div>

        <div
          className="box"
          onClick={ () => this.setTestimonial( 'SET_TO_TIME_MANAGEMENT', 'time-management' ) }
        >
          <FontAwesomeIcon icon={['far', 'calendar-alt']} size='4x' />
          <h3>Time Management</h3>
          <p>I treat time as the unrenewable resource that it is.</p>
        </div>
      </section>
    );
  }
}

export default connect()(TacitBoxes);