import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class Main extends Component {

    render() {
            
        return (

          <Container className="portfolio-container section-container p-3" id="portfolio">
          <Row>
          <Col lg></Col>
          <Col lg>
          <h1 id="header"> Hello! <br/>Meet Dennis Itua,
                           a full-stack web developer.</h1>
          {/* <h5 id="header1">Full-Stack Web Developer</h5>                      */}
          </Col>
          <Col lg></Col>
          </Row>
          </Container>

        );
    };
}

export default Main;