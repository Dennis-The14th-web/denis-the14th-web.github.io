import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-scroll';


class Main extends Component {

    render() {
            
        return (

          <Container className="portfolio-container section-container p-3" id="portfolio">
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
        <div className="typeWriterEffect">
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Poppins',
          color: '#fff',
          fontWeight: 700,
          fontSize: '1.3em',
        }}
        startDelay={2000}
        cursorColor="#252323"
        multiText={[
         `Hello, my name is Dennis Itua. 
         I am a passionate full-stack web developer.`
        ]}
        loop={true}
        nextTextDelay={1000}
        typeSpeed={30}
      />
     
      </div>
      </Col>
      <Col lg={3}></Col>
      </Row>
      <Row>
        <Col lg={4}></Col>
        <Col lg={4}>
          <div className="container">
          <div id="submitDivs">
          <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                
              <div id="info-btn" href="#about">Learn more</div>
               
      </Link>
          </div>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>
      
          </Container>
        );
    };
}

export default Main;