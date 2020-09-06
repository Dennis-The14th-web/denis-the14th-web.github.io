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
            CINEMA BINGE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Row>
            <Col sm={8}>
            <p>
              <h5 className="details">APP DETAILS</h5><br/>
              Cinema Binge is a simple frontend react-app movie
              library. Which allows users to search and see their 
              favorite movie information like year, rating, etc. 
              This app pulls data from the OMDb with an API key 
              and was also deployed using AWS Amplify.
          </p>
            </Col>
            <Col sm={4}>
              <h5 className="tech">TECHNOLOGIES</h5><br/>
              React-app.<br/>AWS Amplify. <br/>OMDb API.<br/>
              IMDbID.<br/>Node.<br/>Font Awesome. <br/>axios.
              
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