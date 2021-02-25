import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Button, ButtonToolbar, Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import { ModalView } from '../ModalView';
import { ModalView1 } from '../ModalView1';
import { ModalView2 } from '../ModalView2';
import { ModalView3 } from '../ModalView3';
import { ModalView4 } from '../ModalView4';
import { ModalView5 } from '../ModalView5';



class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state={addModalShow : false}
        this.state={addModalShow1 : false}
        this.state={addModalShow2 : false}
        this.state={addModalShow3 : false}
        this.state={addModalShow4 : false}
        this.state={addModalShow5 : false}
    }

    render() {
        let addModalClose = () => this.setState({addModalShow : false})
        let addModalClose1 = () => this.setState({addModalShow1 : false})
        let addModalClose2= () => this.setState({addModalShow2 : false})
        let addModalClose3 = () => this.setState({addModalShow3 : false})
        let addModalClose4 = () => this.setState({addModalShow4 : false})
        let addModalClose5 = () => this.setState({addModalShow5 : false})
        return (


    <Container className="projects-container section-container p-3" id="projects">
    <h2 className="header">PROJECTS </h2>
    <hr className="titleLine"></hr>
    <Row>
    <Col lg>
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
                    <a className="fa fa-github" 
                    href="https://github.com/Dennis-The14th-web/DPD-Movies">
                    </a><br />
                    <p className="modalText">This is a full-stack web application.</p>
                    <a className="viewSite" href="https://pddmovieappthe14web.herokuapp.com/">
                    VIEW SITE</a>
                
                <ButtonToolbar className="modalTool">
                <Button
                className='modalButton'
                variant='success'
                onClick={()=> this.setState
                ({addModalShow: true})}>LEARN MORE</Button>

                <ModalView show={this.state.addModalShow}onHide={addModalClose}/>

                </ButtonToolbar>
                </BackSide>
                </Flippy>
    </Col>
    <Col lg>
    <h5 className='pjTitle'><b>CINEMA BINGE</b></h5>
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
               
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>
                <a className="fa fa-github" 
                href="https://github.com/Dennis-The14th-web/cinema-binge">
                </a><br />
                <p className="modalText">This is a react-app frontend web application.</p>
                <a className="viewSite" href="https://master.d1njrkfo9folbl.amplifyapp.com/">
                VIEW SITE</a>  
                <ButtonToolbar className="modalTool">
                <Button className='modalButton'
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow1: true})}>LEARN MORE</Button>

                <ModalView1
                show={this.state.addModalShow1}
                onHide={addModalClose1}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy>
                </Col>
     <Col lg>
    <h5 className='pjTitle'><b>INSTAMILLIGRAM</b></h5>
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
                
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>
                <a className="fa fa-github" 
                href="https://github.com/Dennis-The14th-web/social-media-MERN-stack">
                </a><br />
                <p className="modalText">This is a MERN-Stack web application.</p>
                <a className="viewSite" href="https://dennismernstackapp.herokuapp.com/signin">
                VIEW SITE</a>
                <ButtonToolbar className="modalTool">
                <Button className='modalButton'
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow2: true})}>LEARN MORE</Button>

                <ModalView2
                show={this.state.addModalShow2}
                onHide={addModalClose2}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy>
                </Col>
    </Row>
   <Row>
     <Col lg>
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
               
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>
                <a className="fa fa-github" 
                href="https://github.com/Dennis-The14th-web/clickers-react">
                </a><br />
                <p className="modalText">This is a react-app frontend web application.</p>
                <a className="viewSite" href="https://dennis-the14th-web.github.io/clickers-react">
                VIEW SITE</a>
                <ButtonToolbar className="modalTool">
                <Button className='modalButton'
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow3: true})}>LEARN MORE</Button>

                <ModalView3
                show={this.state.addModalShow3}
                onHide={addModalClose3}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy>
                </Col>
     <Col lg>
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
                
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>
                <a className="fa fa-github" 
                href="https://github.com/Dennis-The14th-web/Train-Scheduler">
                </a><br />
                <p className="modalText">This is a full-stack web application.</p>
                <a className="viewSite" href="https://dennis-the14th-web.github.io/Train-Scheduler/">
                VIEW SITE</a>
                <ButtonToolbar className="modalTool">
                <Button className='modalButton'
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow4: true})}>LEARN MORE</Button>

                <ModalView4
                show={this.state.addModalShow4}
                onHide={addModalClose4}
                />
                
                </ButtonToolbar>
      
                </BackSide>
                </Flippy>
                </Col>
    <Col lg>
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
                
                </FrontSide>
                <BackSide
                style={{ backgroundColor: '#fff'}}>
                <a className="fa fa-github" 
                href="https://github.com/Dennis-The14th-web/GifTastic">
                </a><br />
                <p className="modalText">This is a frontend web application.</p>
                <a className="viewSite" href="https://dennis-the14th-web.github.io/GifTastic/">
                VIEW SITE</a>
                <ButtonToolbar className="modalTool">
                <Button className='modalButton'
                variant='primary'
                onClick={()=> this.setState
                ({addModalShow5: true})}>LEARN MORE</Button>

                <ModalView5
                show={this.state.addModalShow5}
                onHide={addModalClose5}
                />

                </ButtonToolbar>
      
                </BackSide>
                </Flippy>
                </Col>
   </Row>
</Container>

        )
    }

}

export default Portfolio;