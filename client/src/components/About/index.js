import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';



class About extends Component {

    render() {

        return (

            <Container className='section-container' id='about'>
                <h2 className="header">ABOUT</h2>
                <Row>
                    <Col sm={3}></Col>
                    <Col sm={6}>
                    <p className="paragraph">
                 I'm a fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia web tools.
             </p>

                 <p className="paragraph">
                 I'm Skilled at writing well-designed, testable and efficient code using current best practices in web development. 
               </p>  
  
               <p className="paragraph">
                 I'm a full Stack web developer able to build a web presence from the ground up - from Front End concept, navigation, layout and programming to Back End.
               </p>
  
               <p className="paragraph">
                 I'm highly skilled and dependable Software Developer with a strong technical background seeking an opportunity to utilize my skills to foster advancement and boost productivity in a growing company. 
                 <br />
                 Please Kindly Email Me @ dennis.itua1@gmail.com<a className="fa fa-envelope" href="mailto:dennis.itua1@gmail.com" id="emails"></a> or leave a message in the feedback section. 
               </p>
                    </Col>
                    <Col sm={3}></Col>
                </Row>
            </Container>
        )
    }
}

export default About;