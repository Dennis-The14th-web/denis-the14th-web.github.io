import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class Main extends Component {

    render() {
            
        return (

          <Container className="portfolio-container section-container p-3" id="portfolio">
          <Row>
          <Col lg></Col>
          <Col lg>
          <div className="header11"><h3> Hi!<small> I'm </small></h3><h3>Dennis Itua,</h3>
          <h3 className="header12"><small>A Full-Stack</small></h3>
          <h3 className="header12"><small>Web Developer.</small></h3>
          <h3 className="header12"><small>Welcome to my</small></h3>
          <h3 className="header12"><small>MERN-Stack</small></h3>
          <h3 className="header12"><small>Portfolio.</small></h3>
          </div>
          </Col>
          <Col lg></Col>
          </Row>
          </Container>

        );
    };
}

export default Main;