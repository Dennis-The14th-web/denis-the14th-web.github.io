import React, {Component} from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';


export class ModalView1 extends Component {

  render(){
    
    return(
      
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            SPORTS HUB
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Row>
            <Col sm={8}>
            <p>
              <h5 className="details">APP DETAILS</h5><br/>
              This app is a MERN Stack application.
              The Sportshub basically is a sports 
              app that pulls its information from API 
              calls. There is the article, post and comment 
              section as well as the live score for 4 different 
              sports section. User gets to sign up and then log 
              in so they can gain access to the post and comment 
              section features.
          </p>
            </Col>
            <Col sm={4}>
              <h5 className="tech">TECHNOLOGIES</h5><br/>
              javaScript(ES6).<br/>Heroku. <br/>USSN API.<br/>
              Bootsrap4.<br/>Font Awesome. <br/>Trix rich text editor.
              
            </Col>
          </Row>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}
          variant="danger"
          >
          Close</Button>
        </Modal.Footer>
      </Modal>

    )
  }
}