import React, {Component} from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';


export class ModalView2 extends Component {

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
            INSTAMILLIGRAM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Row>
            <Col sm={8}>
            <p>
              <h5 className="details">APP DETAILS</h5><br/>
              Social media MERN-Stack is an instagram-like app 
              that functions from frontend to backend which 
              allows users to signup a new account, log in, 
              update profile, upload profile picture, 
              create a post with image upload, search for 
              users, follow other users, like, unlike, add 
              and update comments.
          </p>
            </Col>
            <Col sm={4}>
              <h5 className="tech">TECHNOLOGIES</h5><br/>
              React. <br/> Heroku. <br/> Materialize. <br/>
              Express.<br/>Node.<br/>Font Awesome. 
              <br/> MongoDB.
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