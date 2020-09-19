import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class Main extends Component {

    render() {
            
        return (

          <Container className="portfolio-container section-container p-3" id="portfolio">
          <Row>
          <Col lg></Col>
          <Col lg>
          <div className="header11"><h3> Hello!</h3><h3><small> meet </small>Dennis Itua,</h3>
          <h3 className="header12"><small>a full-stack web developer.</small></h3></div>
          </Col>
          <Col lg></Col>
          </Row>
          </Container>

        );
    };
}

export default Main;