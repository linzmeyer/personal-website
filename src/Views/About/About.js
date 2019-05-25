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
                <li>Software development on the East side of the Twin Cities. (St. Paul, Woodbury, Maplewood, Oakdale, etc.)</li>
                <li>Okay with working remotely.</li>
                <li>Work that challenges me to learn new technologies and development practices.</li>
                <li>A place with a good onboarding process.</li>
                <li>Friendly coworkers</li>
              </ul>
            </section>

            <section className="info" >
              <h2>INFJ Personality Type</h2>
              <blockquote>
                <strong>“If you treat people as if they were what they ought to be, then you help them to become what they are capable of being.” - Johann Wolfgang Von Goethe</strong>
              </blockquote>
              <p>
                I have spent a lot of time understanding myself. I felt that <a href="https://www.16personalities.com/infj-personality" target="_blank" rel="noopener noreferrer" >this personality test</a> did a great job at helping me understand some things about myself. It describes me as an advocate who loves helping others discover their true potential. Helping others to help themselves is a true joy of mine.
              </p>
              <p>Source: NERIS Analytics</p>
            </section>

            <section className="info" >
              <h2>Learning Preferences</h2>
              <ul>
                <li>I am not partial to any one technology. I am willing to learn anyting to further a cause.</li>
                <li>I learn best by reading documentation and by observation.</li>
                <li>I observe skilled practitioners and take notes on their methods.</li>
                <li>I ask questions after I have explored the subject material myself.</li>
              </ul>
            </section>

            <section className="info" >
              <h2>Strengths</h2>
              <ul>
                <li><strong>Pattern Mapping</strong>: I'm often in a mode of inquiry and retrospection. Optimization is often in the forefront of my mind when working through a task. This is great for maintaining a strong and consistent software architecture.</li>
                <li><strong>Gap Detection</strong>: Finding logical disconnects can be useful. I can help to find holes before the team falls into them.</li>
                <li><strong>Experimentation</strong>: When it's time to hammer out a truly difficult problem, my enthusiasm for exploration will come in handy. I like to discover what can be done with what we have.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ( About );