import React, { Component } from 'react';
import { Link } from 'react-scroll';


class Header extends Component {
  // constructor(props) {
  //   super(props);
  //   this.toggleOpenState = this.toggleOpenState.bind(this);
  //   this.state = {
  //     isOpen: false
  //   };
  // }
  // toggleOpenState() {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // }

    render() {

        return (

          <nav className="shift sticky-top">
            {/* <button  onClick={this.toggleOpenState}>
             <span></span>
           </button> */}
        <ul>
        <Link
            activeClass='active'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            >
              <li>
           <a href="#portfolio"><b>HOME</b></a>
           </li>
          </Link>

          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            >
                <li>
              <a href="#about"><b>ABOUT</b></a>
              </li>
             </Link>

             
            <Link
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            >
                <li>
              <a  href="#projects"><b>PORTFOLIO</b></a>
              </li>
            </Link>

            <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            >
                <li>
                <a  href="#contact"><b>CONTACT</b></a>
                </li>
            </Link>
        </ul>
          </nav>
        )
    };

}


export default Header;