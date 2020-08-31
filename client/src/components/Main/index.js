import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class Main extends Component {

    render() {
            
        return (

          <Container className="portfolio-container section-container p-3" id="portfolio">
          <Row>
          <Col sm></Col>
          <Col sm>
          <img id="photo" src="/images/hdshot.jpg" alt="headshot" className="center" />
          <h1 id="header">- Dennis Itua -</h1>
          <h5 id="header1">Full Stack Web Developer</h5>   
          <a id="contact-me" className="center" href="/images/dennisresume.pdf">VIEW RESUME</a>                  
          </Col>
          <Col sm></Col>
          </Row>
          </Container>

        );
    };
}

export default Main;