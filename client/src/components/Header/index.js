import React, { Component } from 'react';
import { Link } from 'react-scroll';
import { Navbar, Nav } from 'react-bootstrap';


class Header extends Component {

    render() {

        return (
      
          <Navbar expand="lg" className="shift fixed-top" id="nav">
             <Link
              activeClass='active'
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              >
                
              <Nav.Link  href="#portfolio"><img id="dlogo" src="/images/dennislogo.jpg" alt="logo" /></Nav.Link>
            
            </Link>
          <Navbar.Toggle className="toggle ml-auto" aria-controls="basic-navbar-nav" />  
          <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="nav mr-auto">  
            {/* <Link
              activeClass='active'
              to='portfolio'
              spy={true}
              smooth={true}
              offset={-50}
              duration={1000}
              >
                
              <Nav.Link  href="#portfolio"><strong>HOME</strong></Nav.Link>
            
            </Link> */}
            
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                
              <Nav.Link href="#about"><strong>About</strong></Nav.Link>
               
              </Link>
                
              <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                
               <Nav.Link href="#projects"><strong>Portfolio</strong></Nav.Link>
                
              </Link>
            
              <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              >
                
               <Nav.Link href="#contact"><strong>Contact</strong></Nav.Link>
                
              </Link>
              
              </Nav>
              </Navbar.Collapse>
            </Navbar>
        )
    };

}


export default Header;