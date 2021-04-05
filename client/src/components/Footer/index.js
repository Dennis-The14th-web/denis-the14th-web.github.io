import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';


class Footer extends Component {

    render() {

        return (
            <div className="footer">
                <Container>
                <Row>
                <Col lg={2}>
                    <p className="footer-link" align="left">
                        <a href="#portfolio"><b>More about DI</b></a><br/>
                        <a href="#portfolio"><small>Who we are</small></a><br/>
                        <a href="#portfolio"><small>What we do</small></a><br/>
                        <a href="#portfolio"><small>Our values</small></a><br/>
                        <a href="#portfolio"><small>Leadership</small></a><br/>
                        <a href="#portfolio"><small>Our major projects</small></a><br/>
                        <a href="#portfolio"><small>Presentation</small></a><br/>
                        <a href="#portfolio"><small>Our goals</small></a><br/>
                        <a href="#portfolio"><small>Random</small></a><br/>
                        <a href="#portfolio"><small>Development</small></a><br/>
                        <a href="#portfolio"><small>Production</small></a><br/>
                        <a href="#portfolio"><small>Deployment</small></a><br/>
                        <a href="#portfolio"><small>The DI brand</small></a><br/>
                        
                    </p>
                </Col>

                <Col lg={2}>
                    <p className="footer-link" align="left" id="foot-p">
                        <a href="#portfolio"><b>Can we help?</b></a><br/>
                        <a href="#portfolio"><small>Job search for professionals</small></a><br/>
                        <a href="#portfolio"><small>DI station locatior</small></a><br/>
                        <a href="#portfolio"><small>DI credit cards</small></a><br/>
                        <a href="#portfolio"><small>Social media</small></a><br/>
                        <a href="#portfolio"><small>DI apps</small></a><br/>
                        <a href="#portfolio"><small>Gadgets</small></a><br/>
                        <a href="#portfolio"><small>Lifestyle</small></a><br/>
                        <a href="#portfolio"><small>Wellness</small></a><br/>
                        <a href="#portfolio"><small>DI store</small></a><br/>
                        <a href="#portfolio"><small>DI Global Helpline</small></a><br/>
                        
                    </p>
                </Col>


                <Col lg={2}>
                    <p className="footer-link" align="left">
                        <a href="#portfolio"><b>Site information</b></a><br/>
                        <a href="#portfolio"><small>Accessibility</small></a><br/>
                        <a href="#portfolio"><small>Terms and conditions</small></a><br/>
                        <a href="#portfolio"><small>Privacy notice</small></a><br/>
                        <a href="#portfolio"><small>Cookie policy</small></a><br/>
                        <a href="#portfolio"><small>Fraud and scam alert</small></a><br/>
                        <a href="#portfolio"><small>Visiuals</small></a><br/>
                        <a href="#portfolio"><small>Contact us</small></a><br/>
                        
                    </p>
                </Col>
                <Col lg={2}>
                <p id="footer-links" align="center">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
                        <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
                        <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
                        <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
                        <a href="https://www.npmjs.com/package/inquirer"><img src="https://img.shields.io/badge/-Handlebars-blue?style=for-the-badge" alt="Handlebars" /></a>
                        <a href="https://www.mysql.com/"><img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?&style=for-the-badge&logo=mysql&logoColor=white" alt="Mysql" /></a>
                </p>
                </Col>
                <Col lg={4}>
                    <div>
                        <p><small>View my portfolio GitHub repository <a id="contact-me-footer" href="https://github.com/Dennis-The14th-web/denis-the14th-web.github.io">here</a>. This is a MERN Stack application <b>&#9400; 2020 Dennis Itua </b><br/> 
                                                   TECHNOLOGIES 
                                     <br/><a href="https://www.mongodb.com/3"> MongoDB</a>
                                     <br/><a href="https://expressjs.com/"> Express</a>
                                     <br/><a href="https://reactjs.org/"> React</a>
                                     <br/><a href="https://nodejs.org/en/"> Node</a>
                                     </small><br/>
                        <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/dennis-itua-975b9055/"></a><br/>
                        <a className="fa fa-github" href="https://github.com/Dennis-The14th-web" id="fa-github"></a><br/>
                        <a className="fa fa-envelope" href="mailto:dennis.itua1@gmail.com"></a><br/>
                        <a className="fa fa-stack-overflow" href="https://stackoverflow.com/users/12722030/dennis-the14th-web"></a>
                                     
                        </p> 
                    </div> 
                    </Col> 
                    </Row>  
                    </Container>        
            </div>
        )
    };
}


export default Footer;