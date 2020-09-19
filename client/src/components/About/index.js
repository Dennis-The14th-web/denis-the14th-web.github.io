import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';



class About extends Component {

    render() {

        return (

            <Container className='section-container' id='about'>
                <h2 className="header">ABOUT</h2>
                <hr className="contactline"/>
                <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                <img id="photo" src="/images/headshot2.JPG" alt="headshot" className="center" />
                <p className="paragraph">
                I am a full-stack web developer with a background in Radio Frequency Engineering. Proven problem-solving abilities and possess
                a keen eye for aesthetics and presentation. Recognized for excellent interpersonal communication and team collaboration
                skills while working on team-based projects as well as independently. Effectively leverage interest in solving complex
                problems by contributing as a part of a fast-paced, quality-driven team. Able to build a web presence from the ground up
                from conception to navigation, layout, and programming. Proven skilled at writing well-designed, testable
                and efficient code using current best practices
                in web development.
                <a id="contact-me" className="center" href="/images/dennisupdatedresume2.pdf">VIEW RESUME</a>
               </p>

                {/* <p className="paragraph">
                I am a fast learner, hard worker and team player
                who is proficient in an array of scripting
                languages and multimedia web tools.
                </p>  */}
  
               {/* <p className="paragraph">
                I am highly skilled and dependable software
                developer with a strong technical background
                seeking an opportunity to utilize my skills
                to foster advancement and boost productivity
                in a growing company. 
               </p> */}

               <p className="paragraph">
               {/* I am proficient in computer science applied to javaScript.
               Databases (MySQL, MongoDB, Firebase "Docker-Containerized"). 
               Server side development (Node.js, Express). 
               Browser based technologies (HTML, CSS, Bootstrap, Materilize, 
               javaScript, jQuery, React). Deployment (AWS, Heroku, Git). 
               Quality assurance (Writing Tests). */}
                Please kindly email me @ dennis.itua1@gmail.com
                <a className="fa fa-envelope" 
                href="mailto:dennis.itua1@gmail.com" id="emails">
                </a> or leave a message in the contact section.
                </p>
                </Col>
                <Col lg={2}></Col>
                </Row>
            </Container>
        )
    }
}

export default About;