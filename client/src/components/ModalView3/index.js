import React, {Component} from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';


export class ModalView3 extends Component {

//   constructor(props){
//     super(props); 
//   }

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
            CLICKERS REACT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Row>
            <Col sm={8}>
            <p>
              <h5 className="details">APP DETAILS</h5><br/>
              Clickers-react is a Frontend application.
              Dominating client-side with React app.
              The user gets to click image while the
              computer randomly shuffles the image grid.
              The user loses if the same image is clicked
              twice.
          </p>
            </Col>
            <Col sm={4}>
              <h5 className="tech">TECHNOLOGIES</h5><br/>
              React<br/>HTML5.<br/> CSS.<br/>Node.js.
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