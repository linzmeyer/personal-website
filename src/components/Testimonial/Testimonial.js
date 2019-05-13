import React, {Component} from 'react';
import TestimonialHeader from '../TestimonialHeader/TestimonialHeader';
import { connect } from 'react-redux';

// This component will render a testimonial based on which Tacit box the user clicks on.
class Testimonial extends Component {

  renderTestimonial = () => {
    if ( this.props.testimonial === 'default' ) {
      return (
        <div>
          <blockquote>
            "Chase has efficiently worked in many process areas of our business. The result of these activities sets the tone for the success of the final product, and he is trusted as one of our key resources."
          </blockquote>
          <h4>Jim Ascheman, BW Systems Inc.</h4>
        </div>
      );
    } else if ( this.props.testimonial === 'teamwork' ) {
      return (
        <div>
          <blockquote>
            "Chase was an excellent member of the BW System Inc. team, and is a pleasant individual to work with. I highly recommend him for any team."
          </blockquote>
          <h4>Jim Ascheman, BW Systems Inc.</h4>
        </div>
      );
    } else if ( this.props.testimonial === 'adaptability' ) {
      return (
        <div>
          <blockquote>
            "Our customers frquently change their project tasks and scope. We need to be able to quickly change directions and adapt to the needs of our customers. Chase was often at the forefront of tasks such as these. He would attack these problems head-on with a can-do attitude."
          </blockquote>
          <h4>Jim Ascheman, BW Systems Inc.</h4>
        </div>
      );
    } else if ( this.props.testimonial === 'communication' ) {
      return (
        <div>
          <blockquote>
            "In addition to being a team player, Chase is a take-charge individual who is able to present creative ideas and communicate the benefits of each."
          </blockquote>
          <h4>Jim Ascheman, BW Systems Inc.</h4>
        </div>
      );
    } else if ( this.props.testimonial === 'intrinsic-motivation' ) {
      return (
        <div>
          <blockquote>
            "I have worked with Chase for over five (5) years, functioning as an Account Manager for BW Systems. I have always found Chase to be results driven, tackling all assignments with dedication and a positive attitude."
          </blockquote>
          <h4>Jim Ascheman, BW Systems Inc.</h4>
        </div>
      );
    } else if ( this.props.testimonial === 'time-management' ) {
      return (
        <div>
          <blockquote>
            "Chase is very good about budgetting his time to track his progress thoughout a project. He manages to fullfill projects and project tasks in a timely manner."
          </blockquote>
          <h4>Jim Ascheman, BW Systems Inc.</h4>
        </div>
      );
    }
  }
  render() {
    return (
      <section className="info">
        <TestimonialHeader />
        <div>
          { this.renderTestimonial() }
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ testimonial }) => ({ testimonial });

export default connect( mapStateToProps )( Testimonial );