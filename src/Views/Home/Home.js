import React, {Component} from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import TacitBoxes from '../../components/TacitBoxes/TacitBoxes';
import Testimonial from '../../components/Testimonial/Testimonial';

class Home extends Component {

  render() {
    return (
      <div className="wrapper" >
        <Nav />
        <div>
          <div className="content-container" >
            {/* Top Container */}
            <section className="top-container" >
              <header className="showcase" >
                <h1>Chase Linzmeyer</h1>
                <p>Full stack web developer. Always learning, always growing.</p>
              </header>
            </section>
            
            <section className="bottom-container" >
              {/* { Boxes that describe my work ethic values } */}
              <TacitBoxes />
              {/* Testimonials change based on clicked TacitBoxes */}
              <Testimonial />
            </section>
            {/* Portfolio (github API) */}
          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = ({ testimonial }) => ({ testimonial });

export default connect( mapStateToProps )( Home );
