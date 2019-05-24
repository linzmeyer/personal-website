import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component {

  renderExperience = () => {

  }

  render() {
    return (
      <div className="wrapper" >
        <Nav />
        <div>
          <div className="content-container">
            <section className="info" >
              <h2>My Values</h2>
              <ul>
                <li><strong>Strive For Excellence!</strong></li>
                <li><strong>Teamwork</strong>: I rarely work alone. I am here to help. That means being part of a team with a common goal.</li>
                <li><strong>Adaptability</strong>: I pride myself on understanding the needs of a customer and flexing my abilities and task list until the job is done.</li>
                <li><strong>Communication</strong>: An unclear instruction is an task with no direction or purpose.</li>
                <li><strong>Intrinsic Motivation</strong>: I go to work because I want to be there.</li>
                <li><strong>Time Management</strong>: Ten minutes early is five minutes late!</li>
              </ul>
            </section>

            <section className="info" >
              <h2>Skills</h2>
              <ul>
                <li>Front and backend software development.</li>
                <li>I Specialize in the React framework.</li>
                <li>Wiring control panels for automated processes.</li>
              </ul>
            </section>

            <section className="info" >
              <h2>Technology Stack</h2>
              <ul className="tech-stack" >
                <li><FontAwesomeIcon icon={['fab', 'react']} spin /> React / JSX</li>
                <li><FontAwesomeIcon icon="globe" /> React-Redux</li>
                <li><FontAwesomeIcon icon="retweet" /> Redux-Saga</li>
                <li><FontAwesomeIcon icon={['fab', 'node']} /> Node | npm</li>
                <li><FontAwesomeIcon icon="shipping-fast" /> Express</li>
                <li><FontAwesomeIcon icon="database" /> Postgresql</li>
                <li><FontAwesomeIcon icon="code" /> C++</li>
                <li><FontAwesomeIcon icon="th" /> CSS Grids</li>
                <li><FontAwesomeIcon icon={['fab', 'fort-awesome']} /> Font Awesome</li>
              </ul>
            </section>

            <section className="info" >
              <h2>Experience</h2>
              <div className="experience" >
                <ul>
                  <li>
                    Attended Prime Digital Academy's full immersion program for software engineers.
                    <br></br>
                    January 2019 - Present
                  </li>
                  <li>Engineering internship creating screen layouts for human-machine interface controllers.</li>
                  <li>5 years experience building and wiring custom control panels for automated industrial machines.</li>
                  <li>AAS Degree in Wind Energy Technology</li>
                </ul>
                { this.renderExperience() }
              </div>

            </section>

            <section className="info" >
              <h2>What I'm Looking For</h2>
              <ul>
                <li>Software development on the East side of the Twin Cities. (Woodbury, Maplewood, Oakdale, etc.)</li>
                <li>Okay with working remotely.</li>
                <li>A place with a good onboarding process.</li>
                <li>Friendly coworkers</li>
              </ul>
            </section>

            <section className="info" >
              <h2>INFJ Personality Type</h2>
              <blockquote>
                “Treat people as if they were what they ought to be and you help them to become what they are capable of being.” - Johann Wolfgang Von Goethe
              </blockquote>
              <p>
                I have spent a lot of time studying and understanding myself. I felt that <a href="https://www.16personalities.com/infj-personality" target="_blank" rel="noopener noreferrer">this personality test</a> did a great job at helping me understand some things about myself. It describes me as an advocate who loves helping others discover their true potential. Helping others to help themselves is a true joy of mine. "Nothing lights up advocates like creating a solution that changes people’s lives."
              </p>
              <h3>Source: NERIS Analytics</h3>
            </section>

            <section className="info" >
              <h2>Learning Preferences</h2>
              <ul>
                <li>I am not partial to any one technology. I am willing to learn anyting to further a cause.</li>
                <li>I learn best by reading (reliable) documentation.</li>
                <li>I observe skilled practitioners and take notes on their methods.</li>
                <li>I absorb information like a sponge when being mentored.</li>
                <li>I ask questions only after I have explored the subject material myself or if I am completely stuck on a problem.</li>
              </ul>
            </section>

            <section className="info" >
              <h2>Strengths</h2>
              <ul>
                <li><strong>Gap Detection</strong>: Finding logical disconnects can be useful. I can help to find holes before the team falls into them.</li>
                <li><strong>Pattern Mapping</strong>: Always in a mode of inquiry and retrospection. Optimization is often in the forefront of my mind when working through a task. Sometimes it's more important to work through the project and come back to refactor if time allows.</li>
                <li><strong>Experimentation</strong>: I can help to find shortcuts with this exploratory attitude. I remain aware that exploration is not always in the best interest of the team, so I keep this tool tucked away until it's time to hammer out a truly difficult problem.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ( About );