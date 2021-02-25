import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';



class Contact extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
    
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // console.log(this.state);
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    
        $.post('/', this.state, () =>  {
         
       // show alert
           document.querySelector(".alert").style.display = "block" ;
        
        // hide alert after four seconds
           setTimeout(()=>{
           document.querySelector(".alert").style.display = "none" ;
           },4000);

          });
       
    };
    
    render() {
       
        return (

          <div className="container-contact flex section-container p-1" id="contact">
            <Container>
            <h2 className="header">CONTACT</h2>
            <hr className="titleLine"></hr>
            <div className="alert">Message sent successfully.</div>
          <Row>
            
            <Col lg={4}>
            <Form action="/" method="post" id="contactForm">
    <Form.Group controlId="formBasicName">
    <Form.Label></Form.Label>
    <Form.Control type="name" placeholder="Enter name"
    value={this.state.name} 
    onChange={e => this.setState({ name: e.target.value})} required
    />
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Enter email"
    value={this.state.email} 
    onChange={e => this.setState({ email: e.target.value})} required
     />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" rows="6"
     placeholder="Your message"
     value={this.state.message} 
     onChange={e => this.setState({ message: e.target.value})} required
     />
  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <div className="container">
    <div id="submitDiv">
    <div  onClick={e=> this.onSubmit(e)} 
    id="btn-submit" type="submit"
    variant="primary">
    Submit
  </div>
  </div>
  </div>
  
</Form>
</Col>
<Col log={4}></Col>
<Col lg={4}></Col>
</Row>
</Container>
</div>
        )
    };
}

export default Contact;