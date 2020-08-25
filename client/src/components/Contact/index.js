import React, { Component } from 'react';


class Contact extends Component {

    render() {

        return (

      <div className="contact-container section-container w-100 p-3" id="contact">
          <div className="container">
            <h2 id="header2">Feedback</h2>
            <hr id="contactline" />
            <div className="alert">Message sent successfully. Thanks for your feedback.</div>

            <div className="row">

                <form action="/" method="post" id="contactForm">
                    <div className="form-row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name/Nick Name" required />
                            </div>
                        </div>   
                        
                        <div className="col-md-12">     
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" id="message" rows="8" placeholder="Please let me know where I need to improve my skills..."></textarea>
                            </div>
                        </div>     
                            <button id="btn-submit" type="submit" className="btn btn-primary">Submit</button>

                    </div> 
                    
                </form>  
            </div>
          </div>
      </div>

        )
    };
}


export default Contact;