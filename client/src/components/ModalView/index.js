import React, {Component} from 'react';
import {Modal, Button, Row, Col} from 'react-bootstrap';


export class ModalView extends Component {

  // constructor(props){
  //   super(props); 
  // }

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
            DPD MOVIES
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Row>
            <Col sm={8}>
            <p>
              <h5 className="details">APP DETAILS</h5><br/>
              DPD-Movies is a Full stack web application
              that serves as a personal media library
              to keep track of movies desired to watch
              and those watched already. We applied the
              CRUD (Create, Read, Update and Delete) 
              method in this application to get it's
              required results.<br/> We worked as a team
              in building every aspect of this application.
              From frontend to the back end.
          </p>
            </Col>
            <Col sm={4}>
              <h5 className="tech">TECHNOLOGIES</h5><br/>
              MySQL.<br/> Express.<br/>
              Handlebars.<br/> Node.js. <br/> OMDb API.<br />
              IMDbID.<br/>CSS <br/> Constructor (MVC).
              <br/> TMDb API. <br/> Sequelize (ORM).<br/>
              Heroku.
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
