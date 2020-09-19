import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';


class Header extends Component {

    render() {

        return (
      
          <Navbar expand="lg" className="shift fixed-top" id="nav">
          <Navbar.Toggle className="toggle ml-auto" aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse className="collapse" id="basic-navbar-nav">
            <Nav className="nav mr-auto">
            
            <Link className="link"
              activeClass='active'
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              >
                
              <Nav.Link  href="#portfolio"><strong>HOME</strong></Nav.Link>
            
            </Link>
            
            <Link className="link"
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                
              <Nav.Link href="#about"><strong>ABOUT</strong></Nav.Link>
               
              </Link>
                
              <Link className="link"
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                
               <Nav.Link href="#projects"><strong>PORTFOLIO</strong></Nav.Link>
                
              </Link>
            
              <Link className="link"
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                
               <Nav.Link href="#contact"><strong>CONTACT</strong></Nav.Link>
                
              </Link>
              
              </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    };

}


export default Header;