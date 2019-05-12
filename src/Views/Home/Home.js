import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../../components/Nav/Nav';
import TacitBoxes from '../../components/TacitBoxes/TacitBoxes';
import Testimonial from '../../components/Testimonial/Testimonial';

class Home extends Component {

  render() {
    return (
      <div>
        <div className="wrapper">
        {/* Navigation */}
        <Nav/>

        {/* Top Container */}
        <section className="top-container">
          <header className="showcase">
            <h1>Chase Linzmeyer</h1>
            <p>Full stack web developer. Always learning, always growing.</p>
            <a href="#" className="btn" >Read More</a>
          </header>
          <div className="top-box top-box-a">
            <h4>Membership</h4>
            <p className="price">$199/mo</p>
            <a href="" className="btn">Buy Now</a>
          </div>
          <div className="top-box top-box-b">
            <h4>Pro Membership</h4>
            <p className="price">$299/mo</p>
            <a href="" className="btn">Buy Now</a>
          </div>
        </section>

        {/* { Boxes that describe my work ethic values } */}
        <TacitBoxes />

        {/* Testimonials change based on clicked TacitBoxes */}
        <Testimonial />

        {/* Portfolio */}
        <section className="portfolio">
          <img src="https://source.unsplash.com/random/200x200" alt="..." />
          <img src="https://source.unsplash.com/random/201x200" alt="..." />
          <img src="https://source.unsplash.com/random/202x200" alt="..." />
          <img src="https://source.unsplash.com/random/203x200" alt="..." />
          <img src="https://source.unsplash.com/random/204x200" alt="..." />
          <img src="https://source.unsplash.com/random/205x200" alt="..." />
          <img src="https://source.unsplash.com/random/206x200" alt="..." />
          <img src="https://source.unsplash.com/random/207x200" alt="..." />
          <img src="https://source.unsplash.com/random/208x200" alt="..." />
        </section>

        {/* Footer */}

        {/* Wrapper ends */}
        </div>
      </div>
    );
  }
}



const mapStateToProps = ({ testimonial }) => ({ testimonial });

export default connect( mapStateToProps )( Home );
