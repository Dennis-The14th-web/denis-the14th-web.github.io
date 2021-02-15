import React, {Component} from 'react';

class Footer extends Component {

    render() {

        return (
            <div className="footer">
            <div>
                <a className="fa fa-linkedin-square" href="https://www.linkedin.com/in/dennis-itua-975b9055/"></a>
                <a className="fa fa-github" href="https://github.com/Dennis-The14th-web" id="fa-github"></a>
                <a className="fa fa-envelope" href="mailto:dennis.itua1@gmail.com"></a>
                <a className="fa fa-stack-overflow" href="https://stackoverflow.com/users/12722030/dennis-the14th-web"></a>
                <p><small>View my portfolio GitHub repository <a id="contact-me-footer" href="https://github.com/Dennis-The14th-web/denis-the14th-web.github.io">here</a>. This is a MERN Stack application <b>&#9400; 2020 Dennis Itua </b></small></p> 
                </div>            
    </div>
        )
    };
}


export default Footer;