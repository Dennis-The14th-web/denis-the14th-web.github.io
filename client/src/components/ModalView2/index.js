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
            TRIVIA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <h4>Centered Modal</h4> */}
          <Row>
            <Col sm={8}>
            <p>
              <h5 className="details">APP DETAILS</h5><br/>
              I create a trivia form with multiple-choice
              options The player will have a limited amount
              of time to finish the quiz. The game ends when
              the time runs out. The page will reveal the number
              of questions that players answer correctly and
              incorrectly. The player can only select one answer
              per question also I added a countdown timer and restart button.
          </p>
            </Col>
            <Col sm={4}>
              <h5 className="tech">TECHNOLOGIES</h5><br/>
              HTML5. <br/> CSS3. <br/> bootstrap. <br/>
              jQuery. <br/> Googlefonts.
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