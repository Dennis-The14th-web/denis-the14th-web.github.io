import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';



class About extends Component {

    render() {

        return (

            <Container className='portfolio-container section-container p-3' id='about'>
                <h2 className="header">ABOUT</h2>
                <hr className="titleLine"></hr>
                <Row>
                <Col lg={7}>
                {/* <img id="photo" src="/images/headshot2.JPG" alt="headshot" className="center" /> */}
                </Col>
                <Col lg={4}>
                <p className="paragraph">
                I am a full-stack web developer with a background in radio frequency engineering. Proven problem-solving abilities and possess
                a keen eye for aesthetics and presentation. Recognized for excellent interpersonal communication and team collaboration
                skills while working on team-based projects as well as independently. Effectively leverage interest in solving complex
                problems by contributing as a part of a fast-paced, quality-driven team. Able to build a web presence from the ground up
                from conception to navigation, layout, and programming. Proven skilled at writing well-designed, testable
                and efficient code using current best practices
                in web development. You can view my educational qualifications <a href="mailto:dennis.itua1@gmail.com">here</a>. 
                kindly, drop a message in my contact section and I will surely get back to you.
                {/* Please kindly email me @ dennis.itua1@gmail.com or leave a message in the contact section.<br />
                <a className="fa fa-envelope" href="mailto:dennis.itua1@gmail.com" id="emails" /> */}
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

               {/* <p className="paragraph">
               I am proficient in computer science applied to javaScript.
               Databases (MySQL, MongoDB, Firebase "Docker-Containerized"). 
               Server side development (Node.js, Express). 
               Browser based technologies (HTML, CSS, Bootstrap, Materilize, 
               javaScript, jQuery, React). Deployment (AWS, Heroku, Git). 
               Quality assurance (Writing Tests). */}
                
                </Col>
                {/* <Col lg={1}></Col> */}
                </Row>
            </Container>
        );
    };
}

export default About;