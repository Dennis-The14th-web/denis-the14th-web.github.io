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
        console.log(this.state);
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
            <h2 id="header2">CONTACT</h2>
            <hr id="contactline"/>
            <div className="alert">Message sent successfully.</div>
          <Row>
            <Col log={2}></Col>
            
            <Col lg={8}>
            <Form action="/" method="post" id="contactForm">
    <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" id="name" placeholder="Enter name"
    value={this.state.name} 
    onChange={e => this.setState({ name: e.target.value})} 
    />
  </Form.Group>


  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="message" id="email" placeholder="Enter email"
    value={this.state.email} 
    onChange={e => this.setState({ email: e.target.value})}
     />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="8"
     id="message" placeholder="Your message"
     value={this.state.message} 
     onChange={e => this.setState({ message: e.target.value})}
     />
  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button  onClick={e=> this.onSubmit(e)} 
    id="btn-submit" type="submit"
    variant="primary">
    Submit
  </Button>
</Form>
</Col>

<Col lg={2}></Col>
</Row>
</Container>
</div>
            
    
        )
    };
}

export default Contact;