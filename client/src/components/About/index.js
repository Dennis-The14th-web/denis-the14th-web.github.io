import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';



class About extends Component {

    render() {

        return (

            <Container className='section-container' id='about'>
                <h2 className="header">ABOUT</h2>
                <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                <p className="paragraph">
                I'm a full-Stack web developer able to build
                a web presence from the ground up - from frontend 
                concept, navigation, layout and programming
                to backend.
               </p>

                <p className="paragraph">
                I'm a fast learner, hard worker and team player
                who is proficient in an array of scripting
                languages and multimedia web tools.
                </p>

                <p className="paragraph">
                I'm skilled at writing well-designed, testable
                and efficient code using current best practices
                in web development. 
               </p>  
  
               <p className="paragraph">
                I'm highly skilled and dependable software
                developer with a strong technical background
                seeking an opportunity to utilize my skills
                to foster advancement and boost productivity
                in a growing company. 
               </p>

               <p className="paragraph">
               Proficient in computer science applied to javaScript.
               Databases (MySQL, MongoDB, Firebase "Docker-Containerized"). 
               Server side development (Node.js, Express). 
               Browser based technologies (HTML, CSS, Bootstrap, Materilize, 
               javaScript, jQuery, React). Deployment (AWS, Heroku, Git). 
               Quality assurance (Writing Tests).
               <br />
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