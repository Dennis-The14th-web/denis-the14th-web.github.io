import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Button, ButtonToolbar, Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { ModalView } from '../ModalView';



class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state={addModalShow : false} 
    }

    render() {
        let addModalClose = () => this.setState({addModalShow : false})
        return (


    <Container class="projects-container section-container p-3" id="projects">
    <h2 className="header">PROJECTS </h2>

    <Row>
    <Col sm>
        <h5 className='pjTitle'><b>DPD MOVIES</b></h5>
    <Flippy
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
               style={{ width: 'auto', height: 'auto' }} /// these are optional style, it is not necessary
              >
               <FrontSide id='frontside'
            //    style={{
            //     backgroundColor: '#41669d',
            //  }}
                >
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>
                
                <ButtonToolbar className='modalButton'>
                <Button
                
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow: true})}>LERN MORE</Button>

                <ModalView
                show={this.state.addModalShow}
                onHide={addModalClose}
                />

                </ButtonToolbar>
                
      
                </BackSide>
                </Flippy>
    </Col>
    <Col sm>
    <h5 className='pjTitle'><b>SPORT HUB</b></h5>
        <Flippy
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
               style={{ width: 'auto', height: 'auto' }} /// these are optional style, it is not necessary
              >
               <FrontSide id='frontside1'
               // style={{
              //   backgroundColor: '#41669d',
             // }}
                >
                RICK
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>

                <ButtonToolbar className='modalButton'>
                <Button
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow: true})}>LERN MORE</Button>

                <ModalView
                show={this.state.addModalShow}
                onHide={addModalClose}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy></Col>
    <Col sm>
    <h5 className='pjTitle'><b>TRIVIA</b></h5>
        <Flippy
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
               style={{ width: 'auto', height: 'auto' }} /// these are optional style, it is not necessary
              >
               <FrontSide id='frontside2'
               // style={{
              //   backgroundColor: '#41669d',
             // }}
                >
                RICK
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>

                <ButtonToolbar className='modalButton'>
                <Button
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow: true})}>LERN MORE</Button>

                <ModalView
                show={this.state.addModalShow}
                onHide={addModalClose}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy></Col>
  </Row>
  <Row>
    <Col sm>
    <h5 className='pjTitle'><b>CLICKY REACT</b></h5>
        <Flippy
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
               style={{ width: 'auto', height: 'auto' }} /// these are optional style, it is not necessary
              >
               <FrontSide id='frontside3'
               // style={{
              //   backgroundColor: '#41669d',
             // }}
                >
                RICK
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>

                <ButtonToolbar className='modalButton'>
                <Button
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow: true})}>LERN MORE</Button>

                <ModalView
                show={this.state.addModalShow}
                onHide={addModalClose}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy></Col>
    <Col sm>
    <h5 className='pjTitle'><b>TRAIN SCHEDULER</b></h5>
        <Flippy
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
               style={{ width: 'auto', height: 'auto' }} /// these are optional style, it is not necessary
              >
               <FrontSide id='frontside4'
               // style={{
              //   backgroundColor: '#41669d',
             // }}
                >
                RICK
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>

                <ButtonToolbar className='modalButton'>
                <Button
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow: true})}>LERN MORE</Button>

                <ModalView
                show={this.state.addModalShow}
                onHide={addModalClose}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy></Col>
    <Col sm>
    <h5 className='pjTitle'><b>gifKOLLECTIONZ</b></h5>
        <Flippy
               flipOnHover={true} // default false
               flipOnClick={false} // default false
               flipDirection="horizontal" // horizontal or vertical
               ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
               style={{ width: 'auto', height: 'auto' }} /// these are optional style, it is not necessary
              >
               <FrontSide id='frontside5'
               // style={{
              //   backgroundColor: '#41669d',
             // }}
                >
                RICK
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>

                <ButtonToolbar className='modalButton'>
                <Button
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow: true})}>LERN MORE</Button>

                <ModalView
                show={this.state.addModalShow}
                onHide={addModalClose}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy></Col>
  </Row>
</Container>
            
        
        )
    }

}

export default Portfolio;