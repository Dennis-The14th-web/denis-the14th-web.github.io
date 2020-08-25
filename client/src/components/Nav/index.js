import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Nav extends Component {

    render() {

        return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <a className="navbar-brand scroll-control" href="#portfolio" id="logo"><small>dennis</small> portfolio</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="hamburger">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
                <li className="nav-item active">
              <a className="nav-link scroll-control" href="#about">About<span classNameName="sr-only"></span></a>
              </li>
             </Link>
            
             <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
                <li className="nav-item active">
              <a className="nav-link scroll-control" href="#projects">Projects</a>
              </li>
            </Link>

            <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
                <li className="nav-item active">
                <a className="nav-link scroll-control" href="#contact">Feedback</a>
                </li>
            </Link>
          </ul>
        </div>
      </nav>
        )
    };

}


export default Nav;