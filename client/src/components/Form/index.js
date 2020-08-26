import React, { Component } from 'react';
import $ from 'jquery';


class Form extends Component {
    state = {
        name: '',
        message: ''
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        console.log(this.state);
        this.setState({
            name: '',
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
                                <input type="text" className="form-control" id="name" placeholder="Name/Nick Name" 
                                value={this.state.name} 
                                onChange={e => this.setState({ name: e.target.value})}  />
                            </div>
                        </div>   
                        
                        <div className="col-md-12">     
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" id="message" rows="8" placeholder="Please let me know where I need to improve my skills..." 
                                value={this.state.message} 
                                onChange={e => this.setState({ message: e.target.value})}></textarea>
                            </div>
                        </div>     
                            <button onClick={e=> this.onSubmit(e)} 
                            id="btn-submit" type="submit" 
                            className="btn btn-primary">Submit</button>

                    </div> 
                    
                </form>  
            </div>
          </div>
      </div>

        )
    };
}


export default Form;