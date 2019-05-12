import React, {Component} from 'react';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import TacitBoxes from '../../components/TacitBoxes/TacitBoxes';
import Testimonial from '../../components/Testimonial/Testimonial';

class Home extends Component {

  render() {
    return (
      <div className="wrapper" >
        {/* Navigation */}
        <Nav />
        <div>
          <div className="content-container" >
            {/* Top Container */}
            <section className="top-container" >
              <header className="showcase" >
                <h1>Chase Linzmeyer</h1>
                <p>Full stack web developer. Always learning, always growing.</p>
              </header>
              {/* <div className="top-box top-box-a">
                <h4>Membership</h4>
                <p className="price">$199/mo</p>
                <a href="" className="btn">Buy Now</a>
              </div>
              <div className="top-box top-box-b">
                <h4>Pro Membership</h4>
                <p className="price">$299/mo</p>
                <a href="" className="btn">Buy Now</a>
              </div> */}
            </section>
            
            <section className="bottom-container" >

              {/* { Boxes that describe my work ethic values } */}
              <TacitBoxes />

              {/* Testimonials change based on clicked TacitBoxes */}
              <Testimonial />
            </section>

            {/* Portfolio */}
            

            {/* Footer */}

            {/* Wrapper ends */}
            </div>

          </div>
        </div>
    );
  }
}



const mapStateToProps = ({ testimonial }) => ({ testimonial });

export default connect( mapStateToProps )( Home );
